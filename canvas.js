var canvas = document.getElementById("Canvas"); 
canvas.addEventListener("mousedown", mousedown);
var ctx = canvas.getContext("2d");
var block;
let grid_list = [];
let r=1;
let g=1;
let b=1;
var test;

let btstart = new Image();
btstart.src = "img/start.png";

let head = new Image();
head.src = "img/huvve-me-ben.png"

let hp = 50;
let damg = 0;

let click = {x:null,y:null};

let box1 = {x:0,y:0,width:771/4,height:264/4}; //? idk

function init(){
    for(let y=1; y<8; y++){
        for(let x=1; x<16; x++){
            r+=1;
            g+=1;
            b+=1;
            block = new gridbox(100*(x-1),100*(y-1),"rgb(0"+r+",0"+g+",0"+b+")",100,100);
            grid_list.push(block);
        } 
    }
    test = new enemy(10,1,5,head,300,300,50,50)
}
function gameloop(){
    draw();
    console.log(grid_list);
}


function draw(){
    grid_list.forEach(gridblock => {
        gridblock.draw(ctx);
    });
    ctx.drawImage(btstart,box1.x,box1.y,box1.width,box1.height);


}



window.onload = function(){
    init();
    window.requestAnimationFrame(gameloop);
}
