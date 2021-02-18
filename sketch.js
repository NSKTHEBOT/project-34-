const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var monster1,monster2,Superhero2,Superhero1,GamingBackground;
function preload() {
//preload the images here
monster1="images/Monster-01.png"
monster2="images/Monster-02.png"
Superhero2="images/Superhero-02.png"
Superhero1="images/Superhero-01.png"
BackgroundIMG="GamingBackground.png"
}

function setup() {

  // create sprites here
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
bg=loadImage(BackgroundIMG)
superhero = new hero(300,100);
  Fly = new fly(superhero.body,{x:200, y:50});
}

function draw() {
  background(bg);
  superhero.display();
  
  Fly.display();
  
}
function mouseDragged(){
  
      Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
  
}

