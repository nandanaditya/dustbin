
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperBall = new paper(1100,650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  console.log(paper.body.position.x);
  console.log(paper.body.position.y);
  console.log(paper.body.angle);

  groundObject.display();
  dustbinObj.display();
  paperBall.display();

}

function keyPressed (){

if(keyCode === UP_ARROW){

Matter.Body.applyforce(paperBall.body,paperBall.body,position,{x130,y:145})

}
}