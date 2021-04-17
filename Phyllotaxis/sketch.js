
let sketchWidth, sketchHeight;
let sketchBorderSize = 100;

let points = [];
let n = 500;
let alpha = 137.5;

var scalingParameter = 3;
var petalDiameter = 4;

var petalsAdded = 1;

function setup()
{

    sketchWidth = windowWidth - sketchBorderSize;
    sketchHeight = windowHeight - sketchBorderSize;

    createCanvas(sketchWidth, sketchHeight);

    angleMode(DEGREES);
    colorMode(HSB);

    console.log(points);
}

function addPoint(point){
    points.push(point);
}

function draw() {
    background(0);
    fill(255);

    translate(width/2, height/2);
    rotate(n / 2);

    scalingParameter = mouseY / 100.0;
    petalsAdded = mouseX / 100;

    for (let i = 0; i < n; i++) {
        let phi = i * alpha;
        let distFromCenter = scalingParameter * sqrt(i);
        fill(phi % 256, n % 256, 255);
        ellipse(distFromCenter * cos(phi), distFromCenter * sin(phi), petalDiameter);
    }

    n++;
}
