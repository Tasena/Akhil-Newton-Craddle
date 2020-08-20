
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //options.
	//bodies.
    ball1 = new Bob (200,200);
	ball2 = new Ground (400,500,800,20);
	ball3 = new Chain (ball1.body,ball2.body,50,50);
	
  console.log(ball2);
}


function draw() {

  background(0);

	Engine.run(engine);
  rectMode(CENTER);
  
  ball1.display();
  ball2.display();
  drawSprites();
 
}



