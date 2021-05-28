class Panel
{

    static x;
    static y;
    static width;
    static height;

    constructor(x, y, width, height, color)
    {
        Panel.x = x;
        Panel.y = y;
        Panel.width = width;
        Panel.height = height;
        this.color = color;
        this.components = [];

        this.addComponent(new TextComponent(Panel.x, this.getNewComponentY(), Panel.width, Panel.height / 32, "Rotation"));
        this.rotationSpeedSlider = new SliderComponent(Panel.x, this.getNewComponentY(), Panel.width, Panel.height / 16, 0, 25);
        this.addComponent(this.rotationSpeedSlider);

        this.addComponent(new TextComponent(Panel.x, this.getNewComponentY(), Panel.width, Panel.height / 32, "Scaling Parameter"));
        this.scalingParameterSlider = new SliderComponent(Panel.x, this.getNewComponentY(), Panel.width, Panel.height / 16, 0, 100);
        this.addComponent(this.scalingParameterSlider);
    }

    mousePressed()
    {
        this.components.forEach(element => {
            element.mousePressed();
        });
    }

    getNewComponentY()
    {
        if (this.components.length > 0)
        {
            // console.log(this.components[this.components.length - 1].bottom());
            return this.components[this.components.length - 1].bottom();
        }
        return Panel.y + Panel.height / 32;
    }

    addComponent(component)
    {
        this.components.push(component);
    }

    draw()
    {
        fill(this.color);
        rect(Panel.x, Panel.y, Panel.width, Panel.height);

        this.components.forEach(element => {
            element.draw();
        });
    }
}