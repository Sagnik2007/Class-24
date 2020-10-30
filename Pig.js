class Pig{
    constructor(x,y){
    var option = {
       restitution:0.3,
       friction:1,
       density:1
    }
    this.body = Bodies.rectangle(x,y,50,50,option);
    this.width = 50;
    this.height = 50;
    World.add(world,this.body);
}
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()

    }
}