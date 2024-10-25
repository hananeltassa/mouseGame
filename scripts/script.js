window.onload = function () {
    console.log("working")


    // geting the elements on the screen

    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const status = document.getElementById("status"); //this element shows the game status if you win or lose
    const boundaries = document.querySelectorAll(".boundary"); // the walls in the maze (.boundary cz we use it for the class)
    const gameArea = document.getElementById("game");

    let playing = false;
    let hasWon = false;
    let hasLost = false;


    console.log(start);
    console.log(end);
    console.log(status);
    console.log(boundaries);

    function startgame(){
        playing = true; // to set the game has started
        hasWon = false;
        hasLost = false;
        status.textContent = "Game in progress..." // updates the status text
        console.log("The Game has started");

        resetBoundaries(boundaries);  // Remove highlights from boundaries
    }

    function loseGame(){
        if (playing && !hasWon) { // if true and !flase
            playing = false;
            hasLost = true;
            status.textContent = "You Lost! Try Again :( "
            console.log("Game Over");
    
            highlightBoundaries(boundaries); // add highlight class

            setTimeout(resetGame, 2000);  // to reset the game
        }
    }


    function resetGame(){
        if (hasLost){
            status.textContent = "Move your mouse over the 'S' ";
        console.log("Resetting the game");

        resetBoundaries(boundaries);    //call the fun from myTools
        }
    }

    function winGame(){
        if (playing) {
            hasWon = true;  // to ensure if the player won and have exit the gaming area, the boundaries doesnt get highlighted
            status.textContent = "Congratulation You Won !!"
            console.log("Congrats won the game");
            playing =  false;
        }
    }

    start.addEventListener("mouseover", startgame);

    boundaries.forEach(boundary =>{
        boundary.addEventListener("mouseover", loseGame )
    })
    
    end.addEventListener("mouseover", winGame);

    gameArea.addEventListener("mouseleave", loseGame);


}