let currentTool = "pencil";


document.getElementById("pencil").addEventListener("click", function () {
    currentTool = "pencil";
});
document.getElementById("eraser").addEventListener("click", function () {
    currentTool = "eraser";
});
document.getElementById("line").addEventListener("click", function () {
    currentTool = "line";
});
document.getElementById("rectangle").addEventListener("click", function () {
    currentTool = "rectangle";
});
document.getElementById("circle").addEventListener("click", function () {
    currentTool = "circle";
});

function setup() {
    let canvas = createCanvas(1000, 540);
    canvas.parent("sketch-holder");
    background(0, 0, 0);
}

function draw() {
    stroke($("#favcolor").val());
    strokeWeight($("#myRange").val());

    // handle different drawing tools
    if (currentTool === "pencil") {
        if (mouseIsPressed === true) {
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    } else if (currentTool === "eraser") {
        if (mouseIsPressed === true) {
            stroke(255, 255, 255);
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    } else if (currentTool === "line") {
        if (mouseIsPressed === true) {
            stroke(0, 0, 0);
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    } else if (currentTool === "rectangle") {
        if (mouseIsPressed === true) {
            stroke(0, 0, 0);
            rect(mouseX, mouseY, pmouseX, pmouseY);
        }
    } else if (currentTool === "circle") {
        if (mouseIsPressed === true) {
            stroke(0, 0, 0);
            ellipse(mouseX, mouseY, pmouseX, pmouseY);
        }
    }
}