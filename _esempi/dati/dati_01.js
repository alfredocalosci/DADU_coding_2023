let w = 600;

let x = [32,120,480];
let y = w/2;
let d = 48;
let b = 80;

console.log(x.length); // numero di elementi // number of items
console.log(x[0]); // primo elemento / first item

function setup() {
  createCanvas(w, w);
  colorMode(HSB);
}

function draw() {
    background(0,0,0);
    noStroke();

    for(let n = 0; n< x.length; n++){
      let h = map(x[n],0,w,0,360);
      b = map(y,0,w,90,0);
  
      fill(h,80,b);
      circle(x[n],y,d);
    }

}

function mousePressed(){
    x.push(mouseX);
    // y = mouseY;
    // d = random(12,96);
}
