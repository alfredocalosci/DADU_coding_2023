let w = 600;
let albero = []; // contiene i rami // branch holder

let cerchi = [];

function setup() {
  createCanvas(w, w);
  angleMode(DEGREES);

  albero.push(new ramo(w/2, w, -90));

  let c1 = new cerchio(random(w), random(w), 120);
  cerchi.push(c1);

}

function draw() {
  background(220);

    // tutti i rami // all the branches
    for(let i = 0; i < albero.length; i++){
        // albero[i].display();
    }

    for(let i = 0; i < cerchi.length; i++){
        cerchi[i].display();
    }

    // le linee
    for(let i = 0; i < cerchi.length; i++){
        // cerchi[i].display();
        let c1 =  cerchi[i];

        for(let ii = i; ii < cerchi.length; ii++){
            // tutti gli altri cerchi
            let c2 = cerchi[ii];
            line(c1.x, c1.y, c2.x, c2.y);
        }
    }


}

function keyTyped(){
    console.log(key);

    let c1 = new cerchio(random(w), random(w), 120);
    cerchi.push(c1);

    // nuovi rami 
    let nr = albero.length; // rami attuali
    for(let i = 0; i < nr; i++){
        if(albero[i].new == true){
            albero[i].new = false;
            // tre nuovi rami 
            for(let n = 0; n<3; n++){
                // let a = albero[i].a -30 + (n*30); // new angle
                let a = albero[i].a -30 + (n*30) + random(-15,15); // new angle
                let nuovo = new ramo(albero[i].x2, albero[i].y2, a);
                albero.push(nuovo);
            }
        }
    }

}

// branch
function ramo(x,y,a) {
    // initialize coordinates
    this.x1 = x;
    this.y1 = y;
    this.a = a;
    this.l = w/5;
    this.x2 = this.x1 + (cos(this.a)* this.l);
    this.y2 = this.y1 + (sin(this.a)* this.l);
    this.new = true;

    // disegna il ramo // draw the branch
    this.display = function(){
        stroke(0);
        strokeWeight(5);
        line(this.x1, this.y1, this.x2, this.y2);
    }

}

function cerchio(x, y, d){
    this.x = x;
    this.y = y;
    this.d = d;

    this.display = function(){
        fill(128);
        circle(this.x, this.y, this.d);
    }


}

