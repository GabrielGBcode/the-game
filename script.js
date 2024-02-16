const gameTitle = document.getElementById("game-title");
const playBtn = document.getElementById("play-btn");
const themeToggle = document.getElementById("theme-toggle");

playBtn.addEventListener("click", () => {
  if (gameTitle.textContent === "O Jogo") {
    gameTitle.textContent = "Perdeu!";
    playBtn.textContent = "Jogar novamente...";
  } else {
    gameTitle.textContent = "O Jogo";
    playBtn.textContent = "Jogar";
  }
});

function toggleTheme(params) {
  document.body.classList.toggle("dark-theme");
  themeToggle.textContent = document.body.classList.contains("dark-theme")
    ? "🌞"
    : "🌑";
}

themeToggle.addEventListener("click", toggleTheme());
