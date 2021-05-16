var bg, bgImg;
var player, playerImg;
var SMImage, SM;
var plasticGroup, plasticImg, plastic;
var score = 0;

function preload(){

  bgImg = loadImage("sprites/bg.gif");
  playerImg = loadImage("sprites/submarine.gif");
  SMImage = loadImage("sprites/SM.png");
  plasticImg = loadImage("sprites/bottle.png");

}



function setup() {
  createCanvas(800,400);
  player = createSprite(100, 200, 50, 50);
  player.addImage(playerImg);
  player.scale = 0.07;

  SM = createSprite(700, 200, 50, 50);
  SM.addImage(SMImage);
  SM.scale = 0.7;

  plasticGroup = new Group();

  
}

function draw() {
  background(bgImg);  

  if (keyIsDown(UP_ARROW)) {
    player.y -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.y += 10;
  }

  createplastics();

  if (player.isTouching(plasticGroup)){
    plasticGroup.destroyEach();
    score=score+2;
  }
  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 400, 50);
  
}

function createplastics(){
  if(frameCount % 80 == 0){
    var plastic = createSprite(500, Math.round(random(100 , 700), 1000, 5));
    plastic.scale = 0.1;
    plastic.addImage(plasticImg)
    plastic.velocityX = -4;     
    plasticGroup.add(plastic);
  }
}

