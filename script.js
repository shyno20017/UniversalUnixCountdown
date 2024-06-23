function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  fill(0, 0, 0);
  text(Math.floor(Date.now() / 1000), 100, 100)
}