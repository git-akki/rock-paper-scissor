let user_score = 0;
let comp_score = 0;
let choices = document.querySelectorAll(".rock, .paper, .scissors");
let winButton = document.querySelector("button");
let userDisplay = document.querySelector("#user-score");
let compDisplay = document.querySelector("#comp-score");

const showWinner = (userWin, user_choice, computerChoice) => {
    if (userWin) {
      winButton.innerText = `You Won! Your ${user_choice} beats ${computerChoice}`;
      winButton.style.backgroundColor = "green";
      user_score++;
      userDisplay.innerHTML = `<p>${user_score} </p>`;
    } 
    else {
      comp_score++;
      winButton.innerText = `You lose! Comp ${computerChoice} beast your ${user_choice}`;
      winButton.style.backgroundColor = "red";
      compDisplay.innerHTML = `<p>${comp_score}</p>`;
    }
  };
  

const comp_choice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playgame = (user_choice) => {
  const computerChoice = comp_choice();
  if (computerChoice === user_choice) {
    winButton.innerText = "It was Draw!";
    winButton.style.backgroundColor = "grey";
  } else {
    let userWin = false;
    if (user_choice === "rock") {
      userWin = computerChoice === "scissors" ? true : false;
    } else if (user_choice === "paper") {
      userWin = computerChoice === "rock" ? true : false;
    } else if (user_choice === "scissors") {
      userWin = computerChoice === "paper" ? true : false;
    }

    showWinner(userWin, user_choice, computerChoice);
  }
};

choices.forEach((container) => {
  container.addEventListener("click", () => {
    const user_choice = container.getAttribute("class");
    playgame(user_choice);
  });
});
