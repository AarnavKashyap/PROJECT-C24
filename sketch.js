// You could have multiple flags like: start, launch to indicate the state of the game.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground,base,base2,tankhead,tankbody,canonball1,canonball2,canonball3;


function setup(){
       // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,400,1200,20)

    
    base = new Tanker(100,370,140,50);
    base2 = new Tanker(100,345,100,10);
    tankbody = new Tanker(130,320,75,10);
    tankhead = new Ball(100,350,50,5);
    canonball1 = new CanonBall(175,350,10); 
    canonball2 = new CanonBall(200,350,10); 
    canonball3 = new CanonBall(225,350,10); 
    bubble1 = new Bubble(800,250,50,5);
    bubble2 = new Bubble(900,150,50,5);
    bubble3 = new Bubble(1000,200,50,5);
}

function draw(){
    background(225);
    Engine.update(engine);
    tankbody.display();
    tankhead.display();
    ground.display();
    base.display();
    base2.display();
   
    canonball1.display();
    canonball2.display();
    canonball3.display();

    bubble1.display();
    bubble2.display();
    bubble3.display();
    // Remember to update the Matter Engine and set the background.
   

}



function keyReleased() {
    // Call the shoot method for the cannon.
}