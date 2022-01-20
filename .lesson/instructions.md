## Before Starting This Task

Watch the following video and skim its accompanying note.

* Custom Functions ([video](https://drive.google.com/file/d/1f057qlG2t9q6n3oYl6m2FQmbFo8s9Cti/view?usp=sharing)|[note](https://github.com/MissStrong/ICS2O_Semester_1_2021-2022/blob/main/Notes/Unit%202/Note%2003%20-%20Custom%20Functions.md))

**Only begin this task if you have already finished Exercise 1.**

## Instructions

Complete the bodies of `setup()`, `drawSun()`, and `drawMoon()` to replicate the sketch below. The moon and sun follow the cursor. 

![](https://raw.githubusercontent.com/MissStrong/ICS2O_Semester_1_2021-2022/main/Images/Night_and_Day.gif)

Don't import any images – draw the moon and sun using `ellipse()` and `line()`.

*Do not* modify anything in **index.html**. This HTML file needs to be there in order for the sketch to display properly.

When it works, click **Submit** in the top right corner. 

## Challenge

If you'd like a challenge you can add stars to the night sky and clouds to the day sky. The sun should appear behind the clouds and the moon should appear in front of the stars.

## script.js

Here is the original code in **script.js** for reference:

```javascript
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
  fill(12, 20, 69); // night sky colour
  rect(width/4, height/2, width/2, height); // left half of canvas
}

function drawDaySky() {
  noStroke();
  fill(135, 206, 235); // sky blue colour
  rect(3*width/4, height/2, width/2, height); // right half of canvas
}

function drawSun() {
  // Draw the sun here
}

function drawMoon() {
  // Draw the moon here
}
```
