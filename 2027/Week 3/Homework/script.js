const GRID_SIZE = 9;

const grid = document.getElementById("grid");
const status = document.getElementById("status");
const againBtn = document.getElementById("again");

let treasureIndex = null;
let gameOver = false;

function newGame() {
  treasureIndex = Math.floor(Math.random() * GRID_SIZE);
  gameOver = false;
  status.textContent = "\u00A0";
  status.className = "status";
  againBtn.hidden = true;

  grid.innerHTML = "";
  for (let i = 0; i < GRID_SIZE; i++) {
    const plot = document.createElement("button");
    plot.className = "plot";
    plot.setAttribute("aria-label", `Dig plot ${i + 1}`);
    plot.addEventListener("click", () => dig(i, plot));
    grid.appendChild(plot);
  }
}

function dig(index, plotEl) {
  if (gameOver) return;

  if (index === treasureIndex) {
    plotEl.textContent = "\u{1F3C6}";
    plotEl.classList.add("hit");
    status.textContent = "You found the treasure!";
    status.className = "status win";
    endGame();
  } else {
    plotEl.textContent = "\u2716";
    plotEl.classList.add("miss");
    plotEl.disabled = true;
    status.textContent = "Try again!";
    status.className = "status lose";
  }
}

function endGame() {
  gameOver = true;
  document.querySelectorAll(".plot").forEach((btn) => (btn.disabled = true));
  againBtn.hidden = false;
}

againBtn.addEventListener("click", newGame);

newGame();