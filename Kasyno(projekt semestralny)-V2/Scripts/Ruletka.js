document.getElementById('krec-btn').addEventListener('click', function() {
    const numberv = Math.floor(Math.random() * 32) + 1;
    nyga = document.getElementById('numberv').textContent = ` ${numberv}`;


function losujKolor() {
    const colorContainer = document.querySelector('.number-container'); 
    const kolory = ['black', 'red']; 
    

    const wylosowanyIndeks = Math.floor(Math.random() * kolory.length);

    const wylosowanyKolor = kolory[wylosowanyIndeks]; 

    colorContainer.style.backgroundColor = wylosowanyKolor;

  }

  document.querySelector('.rouletka-button').addEventListener('click', losujKolor);





});