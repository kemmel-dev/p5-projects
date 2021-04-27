class PanelComponent
{

    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    mousePressed()
    {
        
    }

    left()
    {
        return this.x;
    }

    right()
    {
        return this.x + this.width;
    }

    bottom()
    {
        return this.y + this.height;
    }

    top()
    {
        return this.y;
    }

}