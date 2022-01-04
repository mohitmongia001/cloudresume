
    var counterContainer = document.querySelector(".website-counter");    
    /*var visitCount = localStorage.getItem("page_view");
    if(visitCount)
    {
        visitCount = Number(visitCount) + 1;

        // Update local storage value
        localStorage.setItem("page_view", visitCount);
        
    }
    else{
        visitCount = 1;
        //Add entry for key="page_view"
        localStorage.setItem("page_view", 1);
    }*/
    var visitCount=0
    fetch('https://m971zp5pmf.execute-api.us-east-1.amazonaws.com/Prod/visitor')
        .then(response => response.json())
        .then((data) => {
            counterContainer.innerHTML = "Visitor #: "+data.Item.count.N;
           //visitCount = data.count
        })

    //counterContainer.innerHTML = "Visitor #: "+visitCount;