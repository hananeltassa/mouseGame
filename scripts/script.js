window.onload = function () {
    let hasStarted = false;
    let hasLost = false;
  
    // Get elements
    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const status = document.getElementById("status");
    const boundaries = document.querySelectorAll(".boundary");
    const gameArea = document.getElementById("game");
  
    // Function to start the game
    function startGame() {
      hasStarted = true;
      hasLost = false;
      status.textContent = "Game is in progress...";
      resetBoundaries();
    }
  
    // Function to handle losing by touching the boundary
    function loseGame() {
      if (hasStarted && !hasLost) {
        hasLost = true;
        status.textContent = "You lost! Try again.";
        highlightBoundaries();
      }
    }
  
    // Function to win the game
    function winGame() {
      if (hasStarted && !hasLost) {
        status.textContent = "You win! Congratulations!";
      }
    }
  
    // Function to reset boundary colors
    function resetBoundaries() {
      boundaries.forEach(function (boundary) {
        boundary.classList.remove("highlighted");
      });
    }
  
    // Function to highlight boundaries (on loss)
    function highlightBoundaries() {
      boundaries.forEach(function (boundary) {
        boundary.classList.add("highlighted");
      });
    }
  
    // Start the game when the mouse enters the start area
    start.addEventListener("mouseover", startGame);
  
    // End the game (win) when the mouse enters the end area
    end.addEventListener("mouseover", winGame);
  
    // Lose the game if the player hits any of the boundaries
    boundaries.forEach(function (boundary) {
      boundary.addEventListener("mouseover", loseGame);
    });
  
    // Lose the game if the mouse leaves the game area
    gameArea.addEventListener("mouseleave", loseGame);
  };
  