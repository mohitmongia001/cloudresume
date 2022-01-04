import json
import boto3

def lambda_handler(event, context):
    
    key={
        'id':{'S':'1'}
    }

    client = boto3.client('dynamodb')

    #Set Table
    tableName = 'mmongia-cloud-resume'
    
    #update the visitor Count
    updateCount = client.update_item(
        TableName = tableName,
        Key=key,
        ExpressionAttributeNames = {
        '#count': 'count'
        },
        ExpressionAttributeValues = {
            ':inc': {
                'N': '1',
            },
        },
        UpdateExpression = "set #count = #count + :inc",
    )

    #get the latest Count
    getCount = client.get_item(
        TableName = tableName,
        Key=key
    )
    
    #create and return response
    response= {
        "statusCode": 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        },
        "body": json.dumps(getCount),
    }

    return response

    
