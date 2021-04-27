class TextComponent extends PanelComponent
{
    constructor(x, y, width, height, text, color = 255, fontSize = 12)
    {
        super(x, y, width, height);
        this.text = text;
        this.color = color;
        this.fontSize = fontSize;
    }

    draw()
    {
        fill(color(255));
        textSize(this.fontSize);
        text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }
}