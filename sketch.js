var seaimage , sea;
var shipimage, ship1;

function preload(){
  seaimage=loadImage("sea.png")
  shipimage = loadAnimation("ship-1.png",  "ship-2.png"  ,"ship-3.png",  "ship-4.png")

}

function setup(){
  
  createCanvas(600,400);
  //creating sea
 sea=createSprite(200,200,20,20);
  sea.addImage(seaimage);
  sea.velocityX=3
  sea.scale=0.3

//creating ship
 ship1=createSprite(200,200,10,20)
 ship1.addAnimation("running",shipimage)
 ship1.scale=0.3
 
 
 
}




function draw() {
 // background("white");

  if (sea.x<0) {
    sea.x=sea.width/2
  }
   
   
  
 drawSprites()
  }