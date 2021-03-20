//Create variables here
var dogImg;
var dogImg1;
var foodStock;
var foodS;
var database;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
 
  dog = createSprite(200,200,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  textSize(20);
 
}


function draw() {  
  background("royalblue");
  
  if(keyWentDown(UP_ARROW)){
    
    dog.addImage(dogImg1);
  }

  drawSprites();

textSize(13);
fill("black");
stroke("red");
text("Note:Please Press the Up Arrow for feeding the dog ", 130,10,300,20);
text("Food remaining to feed dog : "+foodS,170,400); 

}




