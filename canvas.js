var canvas = document.getElementById("Canvas"); 
canvas.addEventListener("mousedown", mousedown);
canvas.addEventListener("keydown", move);
var ctx = canvas.getContext("2d");

var block;
let grid_list = [];
let px = 4;

let btstart = new Image();
btstart.src = "img/start.png";

let hp = 50;

let click = {x:null,y:null};

let box1 = {x:0,y:0,width:771/4,height:264/4}; //? idk

function init(){
    for(let y=0; y<8; y++){
        for(let x=0; x<15; x++){
            block = new gridbox(100*(x-1),100*(y-1),"red",100,100);
            grid_list.push(block);
        } 
    }
    let startPosition = new gridbox(100*(px-1),100*(5-1),"green",100,100);
    grid_list.push(startPosition);
    console.log(startPosition);
}

function gameloop(){
    draw();
    console.log(grid_list);
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    grid_list.forEach(gridblock => {
       gridblock.draw(ctx); 
    });
    ctx.drawImage(btstart,box1.x,box1.y,box1.width,box1.height);

}

window.onload = function(){
    init();
    window.requestAnimationFrame(gameloop);
}
