window.onload = function () {
    console.log("working")


    // geting the elements on the screen

    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const status = document.getElementById("status"); //this element shows the game status if you win or lose
    const boundaries = document.querySelectorAll(".boundary"); // the walls in the maze (.boundary cz we use it for the class)
    const gameArea = document.getElementById("game")

    let playing = false;


    console.log(start);
    console.log(end);
    console.log(status);
    console.log(boundaries);

    function startgame(){
        playing = true; // to set the game has started
        status.textContent = "Game in progress..." // updates the status text
        console.log("game start");
    }

    function loseGame(){
        if (playing) { // if true 
            playing = false;
            status.textContent = "You Lost! Try Again :( "
            console.log("Lost the game");
    
            boundaries.forEach(boundary => {
                boundary.classList.add("highlighted")  // this changes the class for boundaries to change the bk-color
            });

            setTimeout(resetGame, 2000);  // to reset the game
        }
    }


    function resetGame(){
        status.textContent = "Move your mouse over the 'S' ";
        console.log("Again")

        //we need to remove the highlights again
        boundaries.forEach(boundary => {
            boundary.classList.remove("highlighted")  // this changes the class for boundaries to change the bk-color
        });
    
    }


    function winGame(){
        status.textContent = "Congratulation You Won !!"
        console.log("end game");
    }

    start.addEventListener("mouseover", startgame);

    boundaries.forEach(boundary =>{
        boundary.addEventListener("mouseover", loseGame )
    })
    
    end.addEventListener("mouseover", winGame);

    gameArea.addEventListener("mouseleave", loseGame);


}