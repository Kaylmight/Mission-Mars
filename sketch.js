const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rocket, rocketImg, mas, masImg, jup, jupImg, sat, satImg
var gameState = "start";

function preload()
{
	
	bg = loadImage("Sky.jpg")
	launcher = loadImage("Launcher.png")
	pad = loadImage("pad.png")
	grass = loadImage("grass.png")
	rocketImg = loadImage("rocket.png") 
  bgS = loadImage("Space.jpg")
  masImg = loadImage("mas.jpg")
  jupImg = loadImage("jupiter.webp")
  satImg = loadImage("saturn.jpg")
  
  Blackhole = loadImage("Blackhole.png")
}

function setup()
{
	createCanvas(displayWidth, displayHeight);

  //console.log(displayHeight)
 

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	

	ground = new Ground(683, 796, 1366, 50)
	
	    rocket = createSprite(793, 639, 5, 2)
		rocket.addImage("rock" ,rocketImg)
		rocket.scale = 0.3
}

function draw() 
{
  background(0);
  console.log(rocket.y)


  camera.position.x = rocket.x
  camera.position.y = rocket.y

  image(bg, -100, -8000, 1976, 8990)
  image(bgS, -100, -10000, 1976, 3000)

  image(launcher, 413, 500, 250, 350)
  
  image(grass, 973, 800, 500, 200)
  image(grass, -30, 800, 500, 200)
  image(pad, 383, 850, 650, 140)

  image(Blackhole, displayWidth/2 - 300, -9000, 825, 955)

  if(keyWentDown('w'))
  {
	  rocket.velocityY = -3
  }

  if(rocket.y <= 200){
	  rocket.velocityY = -70
  }

  if(rocket.y <= -8500)
  {
   change.rocket.velocityY = 0
  }

  if(keyWentDown("M"))
  {
    var mas = createSprite(800, -9000, 200, 700);
        mas.addImage("mas", masImg);
        mas.scale = 1.6;
  }

  if(keyWentDown("J"))
  {
    var jup = createSprite(800, -8800, 200, 700);
        jup.addImage("jup", jupImg);
        jup.scale = 3.2;
  }

  if(keyWentDown("S"))
  {
    var sat = createSprite(800, -9000, 200, 700);
        sat.addImage("sat", satImg);
        sat.scale = 3.4;
  }



  drawSprites();
}



