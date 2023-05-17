let w = 600;

let x = w/2;
let y = w/2;
let d = 48;
let b = 80;

function setup() {
  createCanvas(w, w);
  colorMode(HSB);
}

function draw() {
    background(0,0,0);

    let h = map(x,0,w,0,360);
    b = map(y,0,w,90,0);
    fill(h,80,b);
    circle(x,y,d);

}

function mousePressed(){
    x = mouseX;
    y = mouseY;
    d = random(12,96);
}
