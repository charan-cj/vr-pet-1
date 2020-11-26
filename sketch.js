//Create variables here
var dogimg1,dogimg2,dog;
var foods = 20
function preload()
{
  //load images here
  dogimg1 = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,330,50,50);
  dog.addImage(dogimg1);
  dog.scale = 0.2
}


function draw() {  
background("lightgreen");
  drawSprites();
  if (keyDown(UP_ARROW) && foods>=0){
    foods = foods-1;
  }
  //add styles here
  textSize(20);
text("foods:"+foods,50,50);
}



