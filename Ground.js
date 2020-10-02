class Ground
{
    constructor(x, y, w, h)
    {
        var options = 
        {
            isStatic : true,
            friction : 1,
            density : 1.5
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = w;
        this.height = h;

        World.add(world, this.body)
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill('Green');
        rect(0, 0, this.width, this.height);
        pop();
      }
}