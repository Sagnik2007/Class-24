class Bird{
    constructor(x,y){
    var option = {
       restitution:0.3,
       friction:1,
       density:1
    }
    this.body = Bodies.rectangle(x,y,45,45,option);
    this.width = 45;
    this.height = 45;
    World.add(world,this.body);
}
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()

    }
}