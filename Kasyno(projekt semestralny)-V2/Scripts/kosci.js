document.getElementById('roll-btn').addEventListener('click', function() {

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
  

    document.getElementById('dice-1').textContent = `🎲 ${dice1}`;
    document.getElementById('dice-2').textContent = `🎲 ${dice2}`;

    const sum = dice1 + dice2;
  

    document.getElementById('result').textContent = `Suma oczek: ${sum}`;
  });