//let's initilize the variables
//in our case we need 4

var yourChoice;
var compsChoice;
var finalScore;
var randomNum;

//we created by 4 buttons so it's important to make them clickable and perform actions
const showResult = document.getElementById("finalScore");
const computerChance = document.getElementById("compChoice");
const yourChance = document.getElementById("yourChoice");
const restartBtn = document.getElementById("restart");
const posChoices = document.querySelectorAll(".choices");

function audioPlay(choice) {
  switch (choice) {
    case "rock":
      rockPlay();
      break;

    case "scissors":
      scissorPlay();
      break;

    case "paper":
      paperPlay();
      break;
  }
}

function rockPlay() {
  var rockAudio = document.getElementById("rock-audio");
  rockAudio.play();
}

function paperPlay() {
  var paperAudio = document.getElementById("paper-audio");
  paperAudio.play();
}

function scissorPlay() {
  var scissorAudio = document.getElementById("scissor-audio");
  scissorAudio.play();
}

posChoices.forEach(posChoice =>
  posChoice.addEventListener("click", e => {
    yourChoice = e.target.id;
    randomNum = Math.floor(Math.random() * 3) + 1;
    choiceGeneratorforComp();
    checkChoices();

    computerChance.innerHTML = '<img src="' + compsChoice + '.png">';
    yourChance.innerHTML = '<img src="' + yourChoice + '.png">';
    showResult.innerHTML = finalScore;
  })
);

//we need a function to reset the game
//so that we can start again
function restartFunc() {
  compChoice = "$";
  computerChance.innerHTML = compChoice;

  randomNum = 0;
  yourChoice = "%";
  yourChance.innerHTML = yourChoice;
  showResult.innerHTML = "!";
}

//lets set up the logic of the game
//we know that we have 3 options of rock, paper and scissors
//which gives us different combinations to win and lose

function checkChoices() {
  audioPlay(yourChoice);

  if (yourChoice == compsChoice) {
    finalScore = "Tie game.";
  } else if (yourChoice == "scissors" && compsChoice == "rock") {
    finalScore = "You lost. Computer won.";
  } else if (yourChoice == "rock" && compsChoice == "scissors") {
    finalScore = "You win. Computer lost.";
  } else if (yourChoice == "paper" && compsChoice == "rock") {
    finalScore = "You win. Computer lost.";
  } else if (yourChoice == "rock" && compsChoice == "paper") {
    finalScore = "Computer wins. You lose.";
  } else if (yourChoice == "paper" && compsChoice == "scissors") {
    finalScore = "You lose. Computer Wins.";
  } else if (yourChoice == "scissors" && compsChoice == "paper") {
    finalScore = "You win. Computer loses.";
  }
}

// computers turn which will be generated ramdomly and
//will be checked with the logic to win or lose as shown above
function choiceGeneratorforComp() {
  if (randomNum == 1) {
    compsChoice = "rock";
  } else if (randomNum == 2) {
    compsChoice = "scissors";
  } else if (randomNum == 3) {
    compsChoice = "paper";
  }
}
