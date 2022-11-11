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
    
    let hjalten = new Image();
    hjalten.src = "img/hjalten.png"
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
    let fullCanvas = {x:0,y:0,width:1400,height:700}; //? idk
    let hitButton = {x:0,y:0,width:771/4,height:264/4}; //? idk
//

function init(){
    for(let y=0; y<8; y++){
        for(let x=0; x<15; x++){
            block = new gridbox(100*(x-1),100*(y-1),"red",100,100);
            grid_list.push(block);
        } 
    }

    player1 = new player(10,1,10,hjalten,200,500,200,200)
    enemy1 = new enemy(10,1,5,head,600,300,200,200)

    let startPosition = new gridbox(100*(px-1),100*(5-1),"green",100,100);
    grid_list.push(startPosition);
}

function gameloop(){
    draw();
    console.log(grid_list);
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    startPosition.draw(ctx);
    grid_list.forEach(gridblock => {
       gridblock.draw(ctx); 
    });

    

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
        ctx.drawImage(btstart,hitButton.x,hitButton.y,hitButton.width,hitButton.height);
        enemy1.draw(ctx)
        player1.draw(ctx)
    }
    
    ctx.drawImage(btstart,hitButton.x,hitButton.y,hitButton.width,hitButton.height);
}



window.onload = function(){
    init();
    window.requestAnimationFrame(gameloop);
}
