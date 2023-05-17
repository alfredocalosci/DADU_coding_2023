let w = 600;

let x = [32,120,480];
let y = [96,320,100];
let d = 12;
let b = 80;

let slider;

console.log(x.length); // numero di elementi // number of items
console.log(x[0]); // primo elemento / first item

function setup() {
  createCanvas(w, w);
  colorMode(HSB);

  slider = createSlider(2, 120, 12);
  slider.position(10, 10);
  slider.style('width', '120px');

}

function draw() {
    background(0,0,90);
    noStroke();

    for(let n = 0; n< x.length; n++){
      let h = map(x[n],0,w,0,360);
      b = map(y[n],0,w,100,20);
      d = slider.value();
  
      fill(h,80,b);
      circle(x[n],y[n],d);
    }

}

function mousePressed(){
  if(mouseY > 20){
    x.push(mouseX);
    y.push(mouseY);
  }
   
    // y = mouseY;
    // d = random(12,96);
}
