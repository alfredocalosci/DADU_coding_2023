let w = 600;
let tuttelefoglie = []; // contiene le foglie // leafs holder

function setup() {
  createCanvas(w, w);
  angleMode(DEGREES);
  nuoveFoglie(w/2, w/2);
}

function draw() {
  background(220);

    
    for(let i = 0; i < tuttelefoglie.length; i++){
         tuttelefoglie[i].display();
    }

}

function keyTyped(){
    console.log(key);
}

function mousePressed(){
    nuoveFoglie(mouseX, mouseY);
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
    // crea 36 foglie intorno a un determinato punto xc,yc
    // 36 new leafs around xc, yc
    for(let i = 0; i < 36; i++){

        let a = random(360); // angolo
        let r = random(60); // raggio
        let x = xc + (cos(a)*r);
        let y = yc + (sin(a)*r);

        let nuova = new foglia(x,y);
        tuttelefoglie.push(nuova);

    }
}



