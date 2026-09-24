let treasureSpot;
const grid = document.getElementById("grid");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");
 
function startGame() {
  treasureSpot = Math.floor(Math.random() * 9);
  message.textContent = "";
  restartBtn.style.display = "none";
  grid.innerHTML = "";
 
  for (let i = 0; i < 9; i++) {
    const btn = document.createElement("button");
    btn.onclick = function () {
      checkSpot(i);
    };
    grid.appendChild(btn);
  }
}
 
function checkSpot(spot) {
  if (spot === treasureSpot) {
    message.textContent = "You found the treasure!";
    restartBtn.style.display = "inline";
  } else {
    message.textContent = "Try again!";
  }
}
 
restartBtn.onclick = startGame;
 
startGame();