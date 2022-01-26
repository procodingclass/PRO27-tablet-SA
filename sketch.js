
// add more points as key-value pairs
var points = [
  { x: 400, y: 200 },

];

function preload(){
  bgImg = loadImage("assets/background.png")
}
function setup() {
  createCanvas(850, 400);

  

 
}

function draw() {
  // set background image
  background("black");

  // write a for loop here
  drawPoints();





}



function drawPoints() {
  push();
  stroke("white")
  strokeWeight(3);
  ellipseMode(RADIUS);
  fill("blue");
  ellipse(200,200, 10, 10);
  pop();
}

