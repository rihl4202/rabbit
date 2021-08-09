var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  leafimg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  garden = createSprite(200,200,50,50);
  garden.addImage(gardenImg);


//creating rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background("black");
  
  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX

  if(frameCount%80===0){
  if(Math.round(random(1,2))===1){
    createApples()
  } else{
    createLeaves()
  }
  }
  drawSprites();
}

function createApples(){
  
    apples = createSprite(random(100,250),0,20,20)
    apples.velocityY = 2
    apples.addImage(appleimg)
    apples.scale = 0.05
  }


function createLeaves(){
  
    leaves = createSprite(random(100,350),0,20,20)
    leaves.velocityY = 2
    leaves.addImage(leafimg)
    leaves.scale = 0.05
  }
