
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ----- Mini Game: Guess the Number -----
const gameContainer = document.getElementById("game-container");
if (gameContainer) {
  gameContainer.innerHTML = `
    <div class="guess-game">
      <p>Guess a number between 1 and 100!</p>
      <input type="number" id="guessInput" placeholder="Enter your guess" />
      <button id="guessBtn">Guess</button>
      <p id="result"></p>
    </div>
  `;

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const guessBtn = document.getElementById("guessBtn");
  const result = document.getElementById("result");

  guessBtn.addEventListener("click", () => {
    const userGuess = Number(document.getElementById("guessInput").value);
    if (!userGuess) {
      result.textContent = "Please enter a number!";
      return;
    }
    if (userGuess === randomNumber) {
      result.textContent = "🎉 Correct! You guessed the number!";
      result.style.color = "#1abc9c";
    } else if (userGuess < randomNumber) {
      result.textContent = "Too low! Try again.";
      result.style.color = "#f87171";
    } else {
      result.textContent = "Too high! Try again.";
      result.style.color = "#f87171";
    }
  });
}