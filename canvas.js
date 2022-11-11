var canvas = document.getElementById("Canvas"); 
canvas.addEventListener("mousedown", mousedown);
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

    let bertImg = new Image();
    bertImg.src = "img/mini-bert.png"
//





// Defining variables
    let main = 0;
    let map = 0;
    let combat = 1;
    let hp = 50;
    let damg = 0;
    let loc;
    let startPos = "1:1";
    let bertPosX = 1;
    let bertPosY = 1;
    let bertPos = startPos;
    let bertPosOld = "1:1";
    let bertInRoom = 1;
    let color;
    let px = 0;
    let py = 0;
    let pxOld = 0;
    let pyOld = 0; 
    let movementSpeed = 100;
//

// Defining arrays
let click = {x:null,y:null};
let path_pos = [startPos];
console.log(path_pos);
path_pos.push("1:2","1:3","2:3","3:3","3:4","3:5","4:5");
console.log(path_pos);

//

// Defining hitboxes
    let fullCanvas = {x:0,y:0,width:1400,height:700}; //? idk
    let hitButton1 = {x:50,y:50,width:771/4,height:264/4}; //? idk
    let hitButton2 = {x:50,y:50,width:771/4,height:264/4}; //? idk
//

function init(){

    for(let y=0; y<8; y++){
        for(let x=0; x<15; x++){
            loc = x+":"+y;
            //console.log(loc);
            block = new gridTile(100*(x-1),100*(y-1),"#606060",100,100,loc);
            pathblock = new path(100*(x-1),100*(y-1),"orange",100,100,loc);
            grid_list.push(block);
        } 
    }
    bert = new player(100*(px-1),100*(py-1),bertImg,100,100,"1:1");
    console.log("e");

    player_com = new player_combat(10,hjalten,200,500,200,200)
    enemy1 = new enemy(10,1,5,head,600,300,200,200)
}

function gameloop(){
    draw();
    console.log(path_list);
    console.log(grid_list);
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(main > 0){
        ctx.drawImage(startBg,fullCanvas.x,fullCanvas.y,fullCanvas.width,fullCanvas.height);
    }
    if(map > 0){
        document.addEventListener("keydown", move);
        console.log("-----")
        ctx.clearRect(0,0,canvas.width,canvas.height)
        grid_list.forEach(gridblock => {
            path_pos.forEach(i => {
                if(gridblock.pos == i){
                    pathblock.draw(ctx);
                    //console.log("Path "+gridblock.pos);
                }
            })
            gridblock.draw(ctx);
            //console.log("Grid "+gridblock.pos);
        });
        path_pos.forEach(i => {
            if(bertPos == i){
                ctx.drawImage(bertImg,px,py,100,100);
            }
        })
        console.log("BertPos "+bertPos);
        console.log("BertPosOld "+bertPosOld);
        console.log("BertX "+px);
        console.log("BertY "+py);
        console.log("BertXOld "+pxOld);
        console.log("BertyOld "+pyOld);
    }
    if(combat > 0){
        ctx.drawImage(btstart,hitButton1.x,hitButton1.y,hitButton1.width,hitButton1.height);
        ctx.drawImage(btstart,hitButton2.x,hitButton2.y,hitButton2.width,hitButton2.height);
        enemy1.draw(ctx)
        player_com.draw(ctx)
    }
    
}



window.onload = function(){
    init();
    window.requestAnimationFrame(gameloop);
}
