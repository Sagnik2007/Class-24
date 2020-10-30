const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var ground,ball,box1,box2;

function setup() {
  createCanvas(800,400);
engine = Engine.create()
world = engine.world

ground = new Ground(400,390,800,10);

box1 = new Box(520,350,50,50);
box2 = new Box(720,350,50,50);
log1 = new Log(620,300,20,250,PI/2);
box3 = new Box(520,280,50,50);
box4 = new Box(720,280,50,50);
log2 = new Log(620,240,20,250,PI/2);

bird = new Bird(200,200);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  
  text(mouseX,mouseX,mouseY);
  text(mouseY,mouseX,mouseY+30);

 ground.display();

 box1.display();
 box2.display();
 log1.display();
 box3.display();
 box4.display();
 log2.display();
 bird.display();

  

}