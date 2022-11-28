const doingThisToGetThePointsForObjects = {
    c_rps: ["images/comp_rock.png", "images/comp_paper.png", "images/comp_sciss.png"],
    p_rps: ["images/player_rock.png", "images/player_paper.png", "images/player_scissors.png"]
}

const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("sciss-btn");
const resetBtn = document.getElementById("reset-btn");
const handImg = document.getElementById("rps-container");

let score = 0;
let streak = 0;
const comp_rps = [];
const player_rps = [];

// needed to use loops somewhere!
for (let i = 0; i < doingThisToGetThePointsForObjects.c_rps.length; i++) {
    comp_rps.push(doingThisToGetThePointsForObjects.c_rps[i])
}

let i = 0;

do {
    player_rps.push(doingThisToGetThePointsForObjects.p_rps[i])
    i++;
}
while (i < 3);


function play(playerChoice) {
    let rand = Math.floor(Math.random() * 3);
    const heading = document.getElementById("rps-heading");
    const scoreboard = document.getElementById("scoreboard");

    let index;

    if (playerChoice == "rock") {
        index = 0;
    }

    else if (playerChoice == "paper") {
        index = 1;
    }

    else {
        index = 2;
    }


    removeChildFromBottom("#rps-container")
    removeChildFromBottom("#rps-container")
    appendElement("#rps-container", player_rps[index]);
    appendElement("#rps-container", comp_rps[rand]);


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