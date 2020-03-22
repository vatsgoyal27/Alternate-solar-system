var s, s2, s3, sun;
var a, b;
var output;

function setup() {
  createCanvas(400,400);
  s = createSprite(390, 200, 20, 20);
  s2 = createSprite(10, 200, 25, 23);
  s3 = createSprite(200, 50, 20, 20);
  sun = createSprite(200, 200, 60, 60);
  sun.shapeColor = "red";

  s.velocityX = 8;
  s.velocityY = 10;
  s.debug = true;
  s.shapeColor = "green";

  s2.velocityX = 14;
  s2.velocityY = 12;
  s2.debug = true;
  s2.shapeColor = "brown";

  s3.velocityX = -10;
  s3.velocityY = -11;
  s3.debug = true;
  s3.shapeColor = "blue";

  a = 1;
  b = 1;
}

function draw() {
  background("black");

  a = a + 0.1;
  b = b + 0.1;

  if (s.x > 350) {
    s.velocityX = s.velocityX - 1;
  }
  if (s.x < 50) {
    s.velocityX = s.velocityX + 1;
  }
  if (s.y > 350) {
    s.velocityY = s.velocityY - 1;
  }
  if (s.y < 50) {
    s.velocityY = s.velocityY + 1;
  }
  if (s2.x > 350) {
    s2.velocityX = s2.velocityX - 1;
  }
  if (s2.x < 50) {
    s2.velocityX = s2.velocityX + 1;
  }
  if (s2.y > 350) {
    s2.velocityY = s2.velocityY - 1;
  }
  if (s2.y < 50) {
    s2.velocityY = s2.velocityY + 1;
  }
  if (s3.x > 350) {
    s3.velocityX = s3.velocityX - 1;
  }
  if (s3.x < 50) {
    s3.velocityX = s3.velocityX + 1;
  }
  if (s3.y > 350) {
    s3.velocityY = s3.velocityY - 1;
  }
  if (s3.y < 50) {
    s3.velocityY = s3.velocityY + 1;
  }
  stroke("blue");
  fill("blue");
  ellipse(s.x, s.y, 30, 30);
  stroke("green");
  fill("green");
  ellipse(s2.x, s2.y, 25, 23);
  stroke("brown");
  fill("brown");
  ellipse(s3.x, s3.y, 20, 20);
  stroke("red");
  fill("red");
  ellipse(sun.x, sun.y, a, b);
  isTouching(s, sun);
  isTouching(s2, sun);
  isTouching(s3, sun);
}
function isTouching(obj1, obj2) {
  if (obj2.x-obj1.x < obj1.width/2 + obj2.width/2
    && obj1.x-obj2.x < obj1.width/2 + obj2.width/2 
    && obj2.y-obj1.y < obj1.height/2 + obj2.height/2 
    && obj1.y-obj2.y < obj1.height/2 + obj2.height/2 ) {
    obj1.x = obj2.x;
    obj1.y = obj2.y;
    
  } 
   else {
    output = 0;
  
  }
}
