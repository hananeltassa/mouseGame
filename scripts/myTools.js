

function resetBoundaries(boundaries){
    //we need to remove the highlights again
    boundaries.forEach(boundary => {
        boundary.classList.remove("highlighted")  // this changes the class for boundaries to change the bk-color
    });
} 


function highlightBoundaries(boundaries){
    //we need to add the highlights 
    boundaries.forEach(boundary => {
        boundary.classList.add("highlighted")  // this changes the class for boundaries to change the bk-color
    });
} 

