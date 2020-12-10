var bullet , wall;
var speed , weight, thickness, damage;
var bulletRightEdge, wallLeftEdge;
var damage 
function setup() {
  createCanvas(1600,400);

  speed = random (30,52);
  weight = random(223,321);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10); 
  bullet.shapeColor = ("white");

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);
  damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

}

function draw() {
  background(220); 
  
  bullet.velocityX = speed;

  if(hasCollided(bullet , wall)){

    bullet.velocityX = 0;

    if (damage > 10){
      wall.shapeColor = color (255,0,0);
    }

    if (damage < 10){
      wall.shapeColor = color (0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet, wall){
  
  bulletRightEdge = bullet.x + bullet. width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true
  }

  return false;
}