
var canvasWidth, canvasHeight;
var sketchWidth, sketchHeight;
var sketchBorderSize = 50;

var points = [];
var n = 500;
var alfa = 137.5;

var scalingParameter = 3;
var petalDiameter = 5;

var petalsAdded = 500;

var panel;

var rotationAngle = 0;

function setup()
{

    canvasWidth = windowWidth - sketchBorderSize;
    canvasHeight = windowHeight - sketchBorderSize;

    createCanvas(canvasWidth, canvasHeight);
    colorMode(HSB);

    var panelWidth = width / 8;
    var panelHeight = height;
    sketchWidth = canvasWidth - panelWidth;
    sketchHeight = canvasHeight;

    panel = new Panel(sketchWidth, 0, panelWidth, panelHeight, color(0, 0, 50));

    angleMode(DEGREES);
    textAlign(CENTER, CENTER);
}

function addPoint(point){
    points.push(point);
}

function draw() {
    background(0);

    panel.draw();


    translate(sketchWidth / 2, sketchHeight/2);
    rotate(rotationAngle += panel.rotationSpeedSlider.getValue());
    scalingParameter = panel.scalingParameterSlider.getValue();

    // scalingParameter = mouseY / 100.0;
    // petalsAdded = mouseX / 100;

    for (let i = 0; i < n; i++) {
        let phi = i * alfa;
        let distFromCenter = scalingParameter * sqrt(i);
        fill(phi % 256, n % 256, 255);
        ellipse(distFromCenter * cos(phi), distFromCenter * sin(phi), petalDiameter);
    }
    n++; 
}   