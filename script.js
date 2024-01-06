function makeChoice(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
  
    const result = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Its a tieeee!';
    } else if (
      (userChoice == 'rock' && computerChoice == 'scissors') ||
      (userChoice == 'paper' && computerChoice == 'rock') ||
      (userChoice == 'scissors' && computerChoice == 'paper')
    ) {
      return 'User wins 🥳';
    } else {
      return 'Computer wins 😒';
    }
  }
  
  function displayResult(userChoice, computerChoice, result) {
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = `
      <p>You chose ${userChoice}.</p>
      <p>Computer chose ${computerChoice}.</p>
      <p>${result}</p>
      <p>Make another choice to play again!</p>
    `;
  }
  