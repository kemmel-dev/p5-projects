class Button
{
    constructor(x, y, width, height, onClick)
    {
            this.x = x;
            this.y = y - height / 2;
            this.width = width;
            this.height = height;
            this.onClick = onClick;
    }

    draw()
    {
        fill(255);
        rect(this.x - this.width / 2, this.y, this.width, this.height);
    }

    middle()
    {
        return this.x;
    }
}