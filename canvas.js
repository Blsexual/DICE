var canvas = document.getElementById("Canvas"); 
canvas.addEventListener("mousedown", mousedown);
var ctx = canvas.getContext("2d");
var block;
let grid_list = [];


let r=1;
let g=1;
let b=1;
var test;
let startPosition = new gridbox(100*(4-1),100*(7-1),"green",100,100);


let btstart = new Image();
btstart.src = "img/start.png";

let head = new Image();
head.src = "img/huvve-me-ben.png"

let hjalten = new Image();
hjalten.src = "img/hjalten.png"

let hp = 50;
let damg = 0;

let click = {x:null,y:null};

let hitButton = {x:0,y:0,width:771/4,height:264/4}; //? idk

function init(){
    for(let y=0; y<8; y++){
        for(let x=0; x<15; x++){
            block = new gridbox(100*(x-1),100*(y-1),"red",100,100);
            grid_list.push(block);
        } 
    }
    player1 = new player(10,1,10,hjalten,200,500,200,200)
    enemy1 = new enemy(10,1,5,head,600,300,200,200)
}

function gameloop(){
    draw();
    console.log(grid_list);
    console.log(startPosition);
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    startPosition.draw(ctx);
    grid_list.forEach(gridblock => {
       gridblock.draw(ctx); 
    });
    enemy1.draw(ctx)
    player1.draw(ctx)
    ctx.drawImage(btstart,hitButton.x,hitButton.y,hitButton.width,hitButton.height);


}



window.onload = function(){
    init();
    window.requestAnimationFrame(gameloop);
}
