var sea,seaImg
var ship
var shipImg

function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  background("blue")
  ship = createSprite (130,200,30,30)
  ship.addAnimation("moving",shipImg)
  ship.scale = 0.25
  //edges = createEdgeSprites();

  sea = createSprite(400,200)
  sea.addImage(seaImg)
  sea.scale = 0.3;
}

function draw() {
  background(0);
 
  sea.velocityX = -2 
  if(sea.x<0){
    sea.x = sea.width/2;
  }

  drawSprites()
}