class Log{
    constructor(x,y,width,height,angle){
    var option = {
       restitution:0.3,
       friction:1,
       density:1
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    Matter.Body.setAngle(this.body,angle);
    World.add(world,this.body);
}
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()

    }
}