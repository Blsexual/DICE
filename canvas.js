var canvas = document.getElementById("Canvas"); 
canvas.addEventListener("mousedown", mousedown);
document.addEventListener("keydown", move);
var ctx = canvas.getContext("2d");

var block;
let grid_list = [];
let path_list = [];


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
    let main = 0;
    let map = 1;
    let combat = 0;
    let hp = 50;
    let damg = 0;
    let loc;
    let startPos = "1:3";
    let color;
//

// Defining arrays
let click = {x:null,y:null};
let path_pos = [startPos];
console.log(path_pos);
path_pos.push("2:2","4:4");
console.log(path_pos);

//

// Defining hitboxes
    let fullCanvas = {x:0,y:0,width:1400,height:700}; //? idk
    let hitButton = {x:0,y:0,width:771/4,height:264/4}; //? idk
//

function init(){

    for(let y=1; y<8; y++){
        for(let x=1; x<15; x++){
            loc = x+":"+y;
            block = new gridTile(100*(x-1),100*(y-1),"#606060",100,100,loc);
            
            
            
            grid_list.push(block);
            
            
        } 
    }
    console.log(path_list);
    player1 = new player(10,1,10,hjalten,200,500,200,200)
    enemy1 = new enemy(10,1,5,head,600,300,200,200)

    startPosition = new gridTile(100*(1-1),100*(1-1),"green",100,100);
    grid_list.push(startPosition);
}

function gameloop(){
    room();
    draw();
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    grid_list.forEach(gridblock => {
       gridblock.draw(ctx); 
    });

    

    if(main > 0){
        //ctx.drawImage(startBg,fullCanvas.x,fullCanvas.y,fullCanvas.width,fullCanvas.height);
    }
    if(map > 0){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        grid_list.forEach(gridblock => {
            path_pos.forEach(pathpos => {
                if(gridblock.pos == pathpos){
                    //path_list.forEach(pathblock => {
                        //if(pathpos == pathblock){
                        rooms = room();
                        pathBlock = new path(100*(x-1),100*(y-1),rooms,100,100,loc);
                        pathBlock.draw(ctx);
                        console.log("Path "+gridblock.pos);
                        //}
                    //})
                    
                } 
            })
            gridblock.draw(ctx);
            console.log("Grid "+gridblock.pos);
        });
    }
    if(combat > 0){
        ctx.drawImage(btstart,hitButton.x,hitButton.y,hitButton.width,hitButton.height);
        enemy1.draw(ctx)
        player1.draw(ctx)
    }
    
}



window.onload = function(){
    init();
    window.requestAnimationFrame(gameloop);
}
