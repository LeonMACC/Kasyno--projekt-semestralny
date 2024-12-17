const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const spinButton = document.getElementById("spinButton");
const result = document.getElementById("result");

const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓', '🍍']; 

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinSlots() {

  const symbol1 = getRandomSymbol();
  const symbol2 = getRandomSymbol();
  const symbol3 = getRandomSymbol();

  slot1.textContent = symbol1;
  slot2.textContent = symbol2;
  slot3.textContent = symbol3;
  checkResult(symbol1, symbol2, symbol3);
}
function checkResult(symbol1, symbol2, symbol3) {
  if (symbol1 === symbol2 && symbol2 === symbol3) {
    result.textContent = "Wygrana! 🎉";
    result.style.color = "green";
  } else {
    result.textContent = "Spróbuj ponownie!";
    result.style.color = "red";
  }
}
spinButton.addEventListener("click", spinSlots);
