let user_score = 0;
let comp_score = 0;
let choices = document.querySelectorAll(".rock, .paper, .scissors");
let winButton = document.querySelector("button");
let userDisplay = document.querySelector(".you");
let compDisplay = document.querySelector(".comp");

const showWinner = (userWin, user_choice, comp_choice) => {
    if (userWin) {
      winButton.innerText = `You Won! Your ${user_choice} beats ${comp_choice}`;
      winButton.style.backgroundColor = "green";
      user_score++;
      userDisplay.innerHTML = `<p>You : </p><span>${user_score}</span>`;
    } else {
      console.log("You lose");
      comp_score++;
      winButton.innerText = `You lose! Comp ${comp_choice} beast your ${user_choice}`;
      winButton.style.backgroundColor = "red";
      compDisplay.innerHTML = `<p>Comp : </p><span>${comp_score}</span>`;
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
    console.log("It was a draw!");
  } else {
    let userWin = false;
    if (user_choice === "rock") {
      userWin = computerChoice === "scissors" ? true : false;
    } else if (user_choice === "paper") {
      userWin = computerChoice === "rock" ? true : false;
    } else if (user_choice === "scissors") {
      userWin = computerChoice === "paper" ? true : false;
    }

    showWinner(userWin);
  }
};

choices.forEach((container) => {
  container.addEventListener("click", () => {
    const user_choice = container.getAttribute("class");
    console.log(user_choice);
    console.log(comp_choice());
    playgame(user_choice);
  });
});