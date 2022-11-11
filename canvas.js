var canvas = document.getElementById("Canvas"); 
canvas.addEventListener("mousedown", mousedown);
canvas.addEventListener("keydown", move);
var ctx = canvas.getContext("2d");

var block;
let grid_list = [];
let px = 4;


// Defining images
    let btstart = new Image();
    btstart.src = "img/start.png";

    let startBg = new Image();
    startBg.src = "img/main_menu.png";
    
    let head = new Image();
    head.src = "img/huvve-me-ben.png"
//

// Defining variables
    let main = 1;
    let map = 0;
    let combat = 0;
    let hp = 50;
    let damg = 0;
//

let click = {x:null,y:null};

// Defining hitboxes
    let box1 = {x:0,y:0,width:771/4,height:264/4}; //? idk
    let fullCanvas = {x:0,y:0,width:1400,height:700}; //? idk
let hitButton = {x:0,y:0,width:771/4,height:264/4}; //? idk
//

function init(){
    for(let y=0; y<7; y++){
        for(let x=0; x<15; x++){
            block = new gridbox(100*(x-1),100*(y-1),"red",100,100);
            grid_list.push(block);
        } 
    }
    let startPosition = new gridbox(100*(px-1),100*(5-1),"green",100,100);
    grid_list.push(startPosition);
    test = new enemy(10,1,5,head,300,300,200,200)
}

function gameloop(){
    draw();
    console.log(grid_list);
    console.log(startPosition);
}


function draw(){
    if(main > 0){
        ctx.drawImage(startBg,fullCanvas.x,fullCanvas.y,fullCanvas.width,fullCanvas.height);
    }
    if(map > 0){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        grid_list.forEach(gridblock => {
            gridblock.draw(ctx);
        });
        startPosition.draw(ctx);
    }
    if(combat > 0){
        ctx.drawImage(btstart,box1.x,box1.y,box1.width,box1.height);
    }

    test.draw(ctx)
    ctx.drawImage(btstart,box1.x,box1.y,box1.width,box1.height);
}



window.onload = function(){
    init();
    window.requestAnimationFrame(gameloop);
}
