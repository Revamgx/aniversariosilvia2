var options = [
 
    {
      name: "Weslei",
      hints: [
        "Trabalhamos no mesmo local",
        "Somos apaixonados por tecnologia",
        "Já dividimos a mesma sala",
        "Algumas vezes dividimos o mesmo carro",
      ]
    }
  ];
  
  var currentOption;

  function startGame() {
    var randomIndex = Math.floor(Math.random() * options.length);
    currentOption = options[randomIndex];
    
    animateHints(currentOption.hints);
    
    document.getElementById("result").textContent = "";
    document.getElementById("guess").value = "";
  }
  
  function animateHints(hints) {
    var hintElements = document.querySelectorAll("#game-container p[id^='hint']");
    
    hintElements.forEach(function(element, index) {
      element.textContent = "";
      
      setTimeout(function() {
        animateText(element, hints[index]);
      }, (index + 1) * 1000);
    });
  }
  
  function animateText(element, text) {
    var chars = text.split("");
    var index = 0;
    
    var timer = setInterval(function() {
      element.textContent += chars[index];
      index++;
      
      if (index >= chars.length) {
        clearInterval(timer);
      }
    }, 100);
  }
  
  function checkAnswer() {
    var guess = document.getElementById("guess").value.toLowerCase();
    
    if (guess === currentOption.name.toLowerCase()) {
      document.getElementById("result").textContent = "Parabéns! Você acertou!";
    } else {
      document.getElementById("result").textContent = "Resposta incorreta. Tente novamente.";
    }
  }
  
  startGame();
  