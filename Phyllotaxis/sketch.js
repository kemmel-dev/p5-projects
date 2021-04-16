
let sketchWidth, sketchHeight;
let sketchBorderSize = 100;

function setup()
{

    sketchWidth = windowWidth - sketchBorderSize;
    sketchHeight = windowHeight - sketchBorderSize;

    createCanvas(sketchWidth, sketchHeight);

    background(0);
}

function draw()
{
    fill(255);
}
