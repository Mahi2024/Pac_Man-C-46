function preload(){
  maze = loadImage("maze.png");
}

function setup(){
  createCanvas(960,500);
Pac_Man = createSprite(400,450,15,15);

//google
c1 = createSprite(200,115,100,10);
c2 = createSprite(155,210,10,200);
c3 = createSprite(200,315,100,10);
c4 = createSprite(255,275,10,90);
c5 = createSprite(237,230,45,10);
c6 = createSprite(300,275,10,90);
c7 = createSprite(380,275,10,90);
c8 = createSprite(340,230,90,10);
c9 = createSprite(340,320,90,10);
c10 = createSprite(465,320,90,10);
c11 = createSprite(465,230,90,10);
c12 = createSprite(425,275,10,90);
c13 = createSprite(505,275,10,90);
c14 = createSprite(700,230,10,200);
c15 = createSprite(772,225,65,10);
c16 = createSprite(745,280,10,100);
c17 = createSprite(772,325,65,10);
c18 = createSprite(800,245,10,50);
c19 = createSprite(773,270,65,10);
c20 = createSprite(600,280,100,10);
c21 = createSprite(550,248,10,75);
c22 = createSprite(650,248,10,75);

//cornerSprites
c23 = createSprite(500,500,1000,15);
c24 = createSprite(500,0,1000,15);
c25 = createSprite(960,50,15,200);
c26 = createSprite(960,400,15,200);
c27 = createSprite(0,50,15,200);
c28 = createSprite(0,400,15,200);
c29 = createSprite(910,155,100,10);
c30 = createSprite(910,300,100,10);
c31 = createSprite(50,155,100,10);
c32 = createSprite(50,300,100,10);
c33 = createSprite(910,195,100,10);
c34 = createSprite(910,260,100,10);
c35 = createSprite(50,195,100,10);
c36 = createSprite(50,260,100,10);
c37 = createSprite(860,175,10,50);
c38 = createSprite(860,280,10,50);
c39 = createSprite(97,175,10,50);
c40 = createSprite(97,280,10,50);

//insideMaze
c41 = createSprite(80,70,50,10);
c42 = createSprite(95,405,80,10);
c43 = createSprite(290,405,200,10);
c41 = createSprite(410,160,200,10);
//c41 = createSprite(80,70,50,10);

c1.shapeColor = "blue";
c2.shapeColor = "blue";
c3.shapeColor = "blue";
c4.shapeColor = "blue";
c5.shapeColor = "blue";
c6.shapeColor = "blue";
c7.shapeColor = "blue";
c8.shapeColor = "blue";
c9.shapeColor = "blue";
c10.shapeColor = "blue";
c11.shapeColor = "blue";
c12.shapeColor = "blue";
c13.shapeColor = "blue";
c14.shapeColor = "blue";
c15.shapeColor = "blue";
c16.shapeColor = "blue";
c17.shapeColor = "blue";
c18.shapeColor = "blue";
c19.shapeColor = "blue";
c20.shapeColor = "blue";
c21.shapeColor = "blue";
c22.shapeColor = "blue";
c23.shapeColor = "blue";
c24.shapeColor = "blue";
c25.shapeColor = "blue";
c26.shapeColor = "blue";
c27.shapeColor = "blue";
c28.shapeColor = "blue";
c29.shapeColor = "blue";
c30.shapeColor = "blue";
c31.shapeColor = "blue";
c32.shapeColor = "blue";
c33.shapeColor = "blue";
c34.shapeColor = "blue";
c35.shapeColor = "blue";
c36.shapeColor = "blue";
c37.shapeColor = "blue";
c38.shapeColor = "blue";
c39.shapeColor = "blue";
c40.shapeColor = "blue";

//pellets
for(var i = 0;i<100;i = i+20){
  var p1 = createSprite(i,225,10,10,10);
  p1.shapeColor = "yellow";
}
 
}

function draw(){
  background("black");
  Pac_Man.shapeColor = "pink";
  
  if (keyDown(UP_ARROW)) {
  Pac_Man.velocityX = 0;
  Pac_Man.velocityY = -2;
}
if (keyDown(DOWN_ARROW)) {
  Pac_Man.velocityX = 0;
  Pac_Man.velocityY = 2;
}
if (keyDown(RIGHT_ARROW)) {
  Pac_Man.velocityX = 2;
  Pac_Man.velocityY = 0;
}
if (keyDown(LEFT_ARROW)) {
  Pac_Man.velocityX = -2;
  Pac_Man.velocityY = 0;
}

fill("white");
line(0,0,400,400);

  
  edges = createEdgeSprites();
  // Pac_Man.bounceOff(edges);
  // Pac_Man.bounceOff(c1||c2||c3||c4||c5||c6||c7||c8||c9||c10||c11||c12||c13||c14||c15||c16||c17||c18||c19||c20||c21||c22);
  // Pac_Man.bounceOff(c2);
  // Pac_Man.bounceOff(c3);
  // Pac_Man.bounceOff(c4);
  // Pac_Man.bounceOff(c5);
  // Pac_Man.bounceOff(c6);
  // Pac_Man.bounceOff(c7);
  // Pac_Man.bounceOff(c8);
  // Pac_Man.bounceOff(c9);
  // Pac_Man.bounceOff(c10);
  // Pac_Man.bounceOff(c11);
  // Pac_Man.bounceOff(c12);
  // Pac_Man.bounceOff(c13);
  // Pac_Man.bounceOff(c14);
  // Pac_Man.bounceOff(c15);
  // Pac_Man.bounceOff(c16);
  // Pac_Man.bounceOff(c17);
  // Pac_Man.bounceOff(c18);
  // Pac_Man.bounceOff(c19);
  // Pac_Man.bounceOff(c20);
  // Pac_Man.bounceOff(c21);
  // Pac_Man.bounceOff(c22);
  
  
  
  drawSprites();
  textSize(20);
fill("white");
text(mouseX+" , "+mouseY,mouseX,mouseY);
}
