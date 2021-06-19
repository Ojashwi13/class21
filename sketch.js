var fixedRect, movingRect;
var rect1,rect2,rect3,rect4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(100,100,50,50);
  rect2=createSprite(200,100,50,50);
  rect3=createSprite(300,100,50,50);
  rect4=createSprite(400,100,50,50);
}

function draw() {
  background(0,0,0);  
  rect3.x = World.mouseX;
  rect3.y = World.mouseY;

  if (isTouching(rect3,rect1)){
    rect3.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else {
    rect3.shapeColor = "green";
    rect1.shapeColor = "green";
  }
 
  drawSprites();
}

