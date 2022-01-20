function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  drawNightSky();
  drawDaySky();
  if (mouseX < width/2) { // cursor is in the left half
    drawMoon(); 
  } else { // cursor is in the right half
    drawSun(); 
  }
}

function drawNightSky() {
  noStroke();
  fill(12, 20, 69);
  rect(width/4, height/2, width/2, height); // left half of canvas
}

function drawDaySky() {
  noStroke();
  fill(135, 206, 235); // sky blue colour
  rect(3*width/4, height/2, width/2, height); // right half of canvas
}

function drawSun() {
  fill(255, 255, 102);
  stroke(255, 255, 102);
  ellipse(mouseX, mouseY, 90);
  strokeWeight(6);
  line(mouseX, mouseY-70, mouseX, mouseY-120);
  line(mouseX-55, mouseY-55, mouseX-90, mouseY-90);
  line(mouseX+55, mouseY+55, mouseX+90, mouseY+90);
  line(mouseX+100, mouseY+100, mouseX+70, mouseY+70);
  line(mouseX, mouseY+70, mouseX, mouseY+120);
  line(mouseX-70, mouseY, mouseX-120, mouseY);
  line(mouseX+70, mouseY, mouseX+120, mouseY);
  line(mouseX+55, mouseY-50, mouseX+90, mouseY-90);
  line(mouseX-55, mouseY+50, mouseX-90, mouseY+90);
}

function drawMoon() {
  fill(224, 224, 224);
  stroke(224, 224, 224);
  ellipse(mouseX, mouseY, 100);
  fill(12, 20, 69);
  stroke(12, 20, 69);
  ellipse(mouseX-30, mouseY, 60);
}
