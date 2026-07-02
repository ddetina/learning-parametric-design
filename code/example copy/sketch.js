
let myColors = ['#78FAD6', '#95FCFA', '#FAFC01', '#01FAFC'];

function preload(){
  // preload assets
}

function setup() {
  // pixelDensity(4);
  createCanvas(640, 400);
  background(0);
}

function draw() {
 
  strokeWeight(3);
  let icolor = color(random(myColors));
  icolor.setAlpha(20);
  stroke(icolor);
  fill(icolor);

  arc(random(0,600),random(0,400),
    150,150,
    random(0,TWO_PI),random(0,TWO_PI),
    PIE);
  if(frameCount>100){
    NoColorSpace();
  }
}