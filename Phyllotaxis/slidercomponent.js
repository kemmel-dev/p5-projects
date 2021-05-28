class SliderComponent extends PanelComponent
{
    constructor(x, y, width, height, minValue, maxValue, label = null, value = 100, step = 1)
    {
        super(x, y, width, height);

        this.minValue = minValue;
        this.maxValue = maxValue;
        this.deltaValue = maxValue - minValue;
        this.value = value;
        this.step = step;
        this.labelY = this.y + this.height / 2;
        this.sliderY = this.y + this.height / 2;
        this.sliderLength = this.width * 0.65;
        this.sliderMiddle = this.x + this.width * 0.1 + this.sliderLength / 2;
        this.sliderStart = this.sliderMiddle - this.sliderLength / 2;
        this.sliderEnd = this.sliderMiddle + this.sliderLength / 2;
        this.button = new Button(this.sliderStart, this.sliderY, 10, 20, this.mousePressed);
    }

    getValue()
    {
        return this.minValue + round((this.button.x - this.sliderStart) / this.sliderLength * this.deltaValue);
    }

    draw()
    {
        if (mouseIsPressed)
        {
            this.mousePressed();
        }
        fill(255);
        text(this.getValue(), this.x + this.width * 0.9, this.sliderY)
        strokeWeight(5);
        stroke(255);
        line(this.sliderStart, this.sliderY, this.sliderEnd, this.sliderY);
        this.button.draw();
        noStroke();
    }

    mousePressed()
    {
        if (mouseY > this.y && mouseY < this.y + this.height)
        {
            print(this.y, this.y+ this.height);
            this.button.x = constrain(mouseX, this.sliderStart, this.sliderEnd);
        }
    }
}