var database;
var canvas;

function setup() {
    canvas = createCanvas(1800,800);
    database = firebase.database();
    button = createButton('Clear');
    button.position(10, 10);
    
}

var drawing = [];
var db_drawing  = [];


function draw() {
    background(255);
    readPosition();
    beginShape();
    stroke(0);
    strokeWeight(4);
    noFill();
    if(db_drawing!=null){
        for(var i = 0 ; i<db_drawing.length ; i++){
            vertex(db_drawing[i].x,db_drawing[i].y);
            endShape();
       }
    }

    this.button.mousePressed(resetSketch);
}

function readPosition() {
  database.ref('drawing/d').on('value',function (data){
      db_drawing = data.val();
  })
}

function resetSketch(){
    drawing = [];
    db_drawing  = [];
    var databaseref = database.ref('drawing');
    databaseref.set({
        "d":drawing
    }) 
}



function mouseDragged(){
    var point = {
        x:mouseX,
        y:mouseY
    }
    drawing.push(point);
    var databaseref = database.ref('drawing');
    databaseref.set({
        "d":drawing
    })
}