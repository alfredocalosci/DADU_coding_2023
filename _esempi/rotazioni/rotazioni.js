let w = 600;
let a = 0; // angolo

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);

  fill(200,0,0);
  rectMode(CENTER);
  square(100,100,60);

  push(); // registra il punto do origine // grab origin point
  translate(w/2, w/3); // muove il punto di origine // move origine
  rotate(PI/4); // rotate
  square(0,0,120);
  pop(); // riporta il punto di origine ... al suo posto // back to original position (push)

  a = map(mouseX, 0, w, 0, TWO_PI);
  fill(128);
  push();
  translate(w/2, w/4*3);
  rotate(a);
  square(0,0,90);
  pop();
}
