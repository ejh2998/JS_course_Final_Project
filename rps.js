const rps = ["images/rock.png", "images/paper.png", "images/scissors.png"];

const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("sciss-btn");
const resetBtn = document.getElementById("reset-btn");
const handImg = document.getElementById("rps-container");


let score = 0;
let streak = 0;

function play(playerChoice) {
    let rand = Math.floor(Math.random() * 3);
    const heading = document.getElementById("rps-heading");
    const scoreboard = document.getElementById("scoreboard");

    removeChildFromBottom("#rps-container")
    appendElement("#rps-container", rps[rand]);


    switch (playerChoice) {

        case "rock":
            if (rand == 0) {
                heading.innerHTML = "DRAW!";
            }
            else if (rand == 1) {
                heading.innerHTML = "YOU LOSE!";
                score = 0;
            }

            else {
                heading.innerHTML = "VICTORY!";
                score++;

                if (score > streak) {
                    streak = score;
                }

            }
            break;

        case "paper":
            if (rand == 0) {
                heading.innerHTML = "VICTORY!";
                score++;

                if (score > streak) {
                    streak = score;
                }
            }

            else if (rand == 1) {
                heading.innerHTML = "DRAW!";
            }

            else {
                heading.innerHTML = "YOU LOSE!";
                score = 0;
            }
            break;

        case "scissors":

            if (rand == 0) {
                heading.innerHTML = "YOU LOSE!";
                score = 0;
            }

            else if (rand == 1) {

                heading.innerHTML = "VICTORY!";
                score++;

                if (score > streak) {
                    streak = score;
                }
            }

            else {
                heading.innerHTML = "DRAW!";
            }
            break;
    }

    scoreboard.innerHTML = `Score: ${score}   Streak: ${streak}`;
}



function appendElement(id, img) {
    let newElement = document.createElement("SPAN");
    newElement.innerHTML = "<img src='" + img + "'></img>";
    document.querySelector(id).appendChild(newElement);
}

function removeChildFromBottom(id) {
    let parent = document.querySelector(id);
    let child = parent.lastChild;
    if (child) {
        parent.removeChild(child);
    }
}