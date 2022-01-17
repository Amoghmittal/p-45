

var monkey

var monkeyImg
var bckgrndImg
var jungle
function preload()
{
	monkeyImg=loadAnimation("m1.png","m3.png","m4.png","m5.png","m6.png")
bckgrndImg=loadImage("jungle bckgrnd.jpg")
}

function setup() {
	createCanvas(800, 700);


	
  jungle=createSprite(400,350,800,700)
  jungle.addImage("j",bckgrndImg)
  jungle.scale=2
  jungle.velocityX=-1
	//Create the Bodies Her
 monkey=createSprite(90,550,20,20)
 monkey.addAnimation("m",monkeyImg)

invisibleGround = createSprite(400,550,800,10);
  invisibleGround.visible = false;
  



	
  
}


function draw() {
 
  background(0);
  
if(keyDown("SPACE")){
monkey.velocityY=-10
}
monkey.velocityY = monkey.velocityY + 0.8

monkey.collide(invisibleGround)


if(jungle.x-300 < 0){
jungle.x=jungle.width/1.5
}
  drawSprites();
 
}



