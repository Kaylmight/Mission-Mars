const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rocket, rocketImg, mas, masImg, jup, jupImg, sat, satImg, Ven, VenImg
var Play = 1;
var End = 0;
var gameState = Play;

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
  VenImg = loadImage("Benus.jpg")
  
  Blackhole = loadImage("Blackhole.png")

  Jupiter = loadImage("Jupiter.png");
  Saturn = loadImage("Saturn.png");
  Mars = loadImage("mars.png");
  Venus = loadImage("Venus.png");

  Sword = loadImage("Sword.png");
  Crown = loadImage("Crown.png");
  Coin = loadImage("Coin.png");
  Chest = loadImage("Chest.png");
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
  image(Jupiter, displayWidth/2 + 500, -9000, 255, 255)
  image(Saturn, displayWidth/2 + 500, -8600, 320, 260)
  image(Mars, displayWidth/2 - 500, -8890, 235, 140)
  image(Venus, displayWidth/2 - 500, -8600, 140, 140)
  

  drawSprites();

if(gameState == Play)
  {
  if(keyWentDown('w'))
  {
	  rocket.velocityY = -3
  }

  if(rocket.y <= 200){
	  rocket.velocityY = -20
  }

  if(rocket.y <= -8500)
  {
   rocket.velocityY = 0

   if(keyWentDown("M"))
   {
     var mas = createSprite(800, -8600, 200, 700);
         mas.addImage("mas", masImg);
         mas.scale = 1.6;
         mas.depth = 0;
 
     var Sword2 = createSprite(displayWidth/2 + 550, -8400, 100, 100);
         Sword2.addImage("swd", Sword);
         Sword2.scale = 1;
         
   }
 
   if(keyWentDown("J"))
   {
     var jup = createSprite(800, -8600, 200, 700);
         jup.addImage("jup", jupImg);
         jup.scale = 3.2;
         jup.depth = 0;
 
     var Coin2 = createSprite(displayWidth/2 - 400, -8700, 100, 100);
         Coin2.addImage("con", Coin);
         Coin2.scale = 1;
         
   }
 
   if(keyWentDown("S"))
   {
     var sat = createSprite(800, -8600, 200, 700);
         sat.addImage("sat", satImg);
         sat.scale = 3.0;
         sat.depth = 0
 
     var Crown2 = createSprite(displayWidth/2 + 600, -8700, 100, 100);
         Crown2.addImage("cwn", Crown);
         Crown2.scale = 1.5;
         
   }
 
   if(keyWentDown("V"))
   {
     var Ven = createSprite(800, -8600, 200, 700);
         Ven.addImage("Ven", VenImg)
         Ven.scale = 2.0;
         Ven.depth = 0;
        
 
     var Chest2 = createSprite(displayWidth/2 - 400, -8400, 100, 100);
         Chest2.addImage("cht", Chest);
         Chest2.scale = 1;
         
   }

   if(keyWentDown("M") && keyWentDown("J") && keyWentDown("V") && keyWentDown("S"))
   {
     gameState = Emd
   }

  }
  }
 
  else if(gameState == End)
  {
    textSize(43);
    text("FABULOUS!! YOU HAVE COLLECTED ALL THE TREASURE. NOW GO N RULE OVER THE WORLD", displayWidth/2 + 200, -8500)
    gameState = Play
  }
  
}



