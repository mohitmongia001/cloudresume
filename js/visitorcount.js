function visitorCount() {
    
    var visitCount = localStorage.getItem("page_view");
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
    }

    document.getElementById("visitor_count").innerHTML = visitCount;
    
}