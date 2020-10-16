const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, trash1, trash2, trash3, ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	
	
	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);

	trash1 = new trash(635,640,120,120);

	paper1 = new paper(150, 675, 70);
	

	//Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  keyPressed();
  paper1.display();

  ground.display(); 
 
  trash1.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-85});
	 }
   }

