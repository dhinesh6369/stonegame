function play(userChoice) {
    var choices = ["stone", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    document.getElementById("result").innerText = "Computer chose " + computerChoice + ". " + result;
}
