var Runner
var path

function preload(){
  //pre-load images
  Runnerrunning = loadAnimation("Runner-1.png", "Runner-2.png")
  pathImg = loadImage("path.png")
  
}
function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200,400,400)
  path.addImage("path",pathImg)
  path.velocityY = 4
  path.scale = 1.2
  Runner = createSprite(180,340,30,30)
  Runner.addAnimation("running",Runnerrunning);
  Runner.scale = 0.08
  
  invisebleGround1 = createSprite(400,0,20,800);
  invisebleGround1.visible = false;
  invisebleGround2 = createSprite(0,400,20,800)
  invisebleGround2.visible = false;
}

function draw() {
  background(0);
if (path.y>400){
  path.y = height/2;
}
Runner.x=World.mouseX
Runner.y=World.mouseY
Runner.collide(invisebleGround1);
Runner.collide(invisebleGround2);


  drawSprites();
}

