var canvas = document.getElementById("Canvas"); 
canvas.addEventListener("mousedown", mousedown);
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

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

    let ghost = new Image();
    ghost.src = "img/ghost.png"
    
    let hjalten = new Image();
    hjalten.src = "img/hjalten.png"

    let bertImg = new Image();
    bertImg.src = "img/mini-bert.png"

    let fightroom = new Image();
    fightroom.src = "img/room.png"
//



// Defining variables
    let main = 0;
    let map = 0;
    let combat = 1;
    let dead = 0;
    let hp = 50;
    let damg = 0;
    let loc;
    let koll = 0;
    let bertPosX = 1;
    let bertPosY = 1;
    let bertPos = "1:1";
    let bertInRoom = 1;
    let color;
    let px = 0;
    let py = 0;
    let pxOld = 0;
    let pyOld = 0; 
    let movementSpeed = 100;
    let e1hp = 10                         //enemy 1 hp
    let e2hp = 15                        //enemy 2 hp
    let php = 20                        //player hp
//

// Defining arrays
let click = {x:null,y:null};
let path_pos = [];
console.log(path_pos);
path_pos.push("1:1","1:2","1:3","2:3","3:3","3:4","3:5","4:5","5:5","5:6");
console.log(path_pos);

//

// Defining hitboxes
    let fullCanvas = {x:0,y:0,width:1400,height:700}; //? idk
//

function init(){

    for(let y=1; y<8; y++){
        for(let x=1; x<15; x++){
            loc = x+":"+y;
            //console.log(loc);
            koll = 0;
            path_pos.forEach(pathPos => {
                if(pathPos == loc){
                    roomses = room();
                    pathBlock = new path(100*(x-1),100*(y-1),roomses,100,100,loc);
                    path_list.push(pathBlock);
                    koll = 1;
                } 
               
            })
            if(koll == 0){
                block = new gridTile(100*(x-1),100*(y-1),"#606060",100,100,loc);
                grid_list.push(block); 
            }
            
            
             
        } 
    }
    console.log(path_list);

    bert = new player(100*(px-1),100*(py-1),bertImg,100,100,"1:1");     //skapar spelaren till kartan

    player_com = new player_combat(php,hjalten,300,500,200,200)      //skapar spelaren till combat och bestämer stats

    weapon1 = new weapon(5,10,btstart,50,50,771/4,264/4)
    weapon2 = new weapon(1,20,btstart,250,50,771/4,264/4)                //skapar "vapen" och bestämer stats
    heal1 = new heal(5,10,btstart,450,50,771/4,264/4)

    etyp = roll(1,2)
    if (etyp == 1){                                                 //skapar fiender och bestämer stats
        enemy = new enemyclass(e1hp,1,5,head,800,375,200,200)   //head enemy
    }
    else if (etyp == 2){
        enemy = new enemyclass(e2hp,3,7,ghost,800,300,200,200)  //ghost enemy
    }
    
}

function gameloop(){
    room();
    draw();
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
        path_list.forEach(pathBlock => {
            path_pos.forEach(pathPos => {
                if(pathPos == pathBlock.pos){
                    pathBlock.draw(ctx);
                    console.log("Path "+pathBlock.pos);
                    console.log("color "+pathBlock.color);
                }
            })
        });
        path_pos.forEach(i => {
            if(bertPos == i){
                ctx.drawImage(bertImg,px,py,100,100);
            }
        })
        console.log("BertPos "+bertPos);

        console.log("BertX "+px);
        console.log("BertY "+py);

    }
    if(combat > 0){               //ritar utt allt för combat
        ctx.drawImage(fightroom,fullCanvas.x,fullCanvas.y,fullCanvas.width,fullCanvas.height);
        weapon1.draw(ctx)
        weapon2.draw(ctx)
        heal1.draw(ctx)
        enemy.draw(ctx)
        player_com.draw(ctx)
    }
    
}



window.onload = function(){
    init();
    window.requestAnimationFrame(gameloop);
}
