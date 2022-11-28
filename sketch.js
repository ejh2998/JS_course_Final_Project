function setup() {
    let canvas = createCanvas(1000, 540);
    canvas.parent('sketch-holder');
    background(0, 0, 0);
}

function windowResized() {
    centerCanvas();
}

function draw() {
    stroke($("#favcolor").val());
    strokeWeight($("#myRange").val());
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}