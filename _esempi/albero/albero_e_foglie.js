let w = 600;
let albero = []; // contiene i rami // branch holder
let tuttelefoglie = []; // contiene le foglie // leafs holder


function setup() {
  createCanvas(w, w);
  angleMode(DEGREES);

  albero.push(new ramo(w/2, w, -90));

}

function draw() {
  background(220);

    
    // tutti i rami // all the branches
    for(let i = 0; i < albero.length; i++){
        albero[i].display();
    }

    for(let i = 0; i < tuttelefoglie.length; i++){
        tuttelefoglie[i].display();
    }


}

function keyTyped(){
    console.log(key);

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

function mousePressed(){
    nuoveFoglie(mouseX, mouseY);
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

    // crea le foglie
    // le foglie
    nuoveFoglie(this.x2,this.y2);

    // disegna il ramo // draw the branch
    this.display = function(){
        stroke(0);
        strokeWeight(5);
        line(this.x1, this.y1, this.x2, this.y2);
    }

}

// leaf
function foglia(x,y) {
    this.x = x;
    this.y = y;
    this.r = 2 + random(8);

    // disegna il ramo // draw the branch
    this.display = function(){
        noStroke();
        fill(0,200,0);
        circle(this.x,this.y,this.r);
    }

}

function nuoveFoglie(xc,yc){
    // crea 64 foglie intorno a un determinato punto xc,yc
    // 64 new leafs around xc, yc
    for(let i = 0; i < 64; i++){

        let a = random(360); // angolo
        let r = random(60); // raggio
        let x = xc + (cos(a)*r);
        let y = yc + (sin(a)*r);

        let nuova = new foglia(x,y);
        tuttelefoglie.push(nuova);

    }
}

