function preload(){
  // preload assets
}

function setup() {
  // pixelDensity(4);
  createCanvas(640, 400);
}

function draw() {
 
  strokeWeight(3);
  stroke(255,0,0,20);
  fill(255,0,0, 10);
  arc(random(0,300),random(0,300),
    150,150,
    random(0,TWO_PI),random(0,TWO_PI),
    PIE);
  if(frameCount>50){
    NoColorSpace();
  }
}