let w = 600;

let x = [];
let y = [];
let d = 2;
let b = 80;

let slider;

console.log(x.length); // numero di elementi // number of items
console.log(x[0]); // primo elemento / first item

function setup() {
  createCanvas(w, w);
  colorMode(HSB);

  slider = createSlider(2, 120, 48);
  slider.position(10, 10);
  slider.style('width', '120px');

  for(let i = 0; i<300; i++){
    x.push(random(w));
    y.push(random(w));
  }

}

function draw() {
    background(0,0,90);
    noStroke();

    // circles
    for(let n = 0; n< x.length; n++){
      d = slider.value();
      fill(0,0,0);
      circle(x[n],y[n],2);
    }

    // lines
    /*
    stroke(0,0,80);
    for(let n = 0; n< x.length; n++){
      for(let i = n+1; i< x.length; i++){
        if(dist(x[n], y[n], x[i], y[i]) < 48){
          line(x[n], y[n], x[i], y[i]);
        }
      }
    }
    */
    

  stroke(0);

  for(let i = 0; i< x.length; i++){

    if(dist(x[i], y[i], mouseX, mouseY) < d){
      line(x[i], y[i], mouseX, mouseY);
    }

  }


}

function mousePressed(){
  if(mouseY > 20){
    x.push(mouseX);
    y.push(mouseY);
  }

}

