
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var ball;
var rightSide,leftSide;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//paper = new Paper(150,600,10);
	//ground = new Ground(400,680,800,20);
	leftSide = new Ground(550,440,20,100);
	rightSide = new Ground(670,440,20,100);
	//bottom = new Dustbin(610,660,100,20);
	
 var ball_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
 }
 ball = Bodies.circle(100,200,10,ball_options);
 World.add(world,ball);

 ground = new Ground(400,500,800,20);

 
 

 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("purple");
  


  Engine.update(engine);

  //paper.display();
  ground.display();
  //bottom.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x,ball.position.y,10);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:15,y:-15})
	}
}

