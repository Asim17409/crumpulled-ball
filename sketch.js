
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
paper=new Paper(100,300,20)
ground = new Ground(400,380,800,20);
wall1=new Dustbin(610,360,100,20)
wall2=new Dustbin(550,320,20,100)
wall3=new Dustbin(670,320,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


Engine.update(engine)

  
paper.display();
ground.display();
wall1.display();
wall2.display();
wall3.display();
 


  function keyPressed(){

	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});
	}
  }
 
}






