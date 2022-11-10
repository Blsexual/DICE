var canvas = document.getElementById("CanvasMap"); 
var ctx = canvas.getContext("2d");
var block;
let grid_list = [];
let r=1;
let g=1;
let b=1;
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
}
function gameloop(){
    draw();
    Path();
    console.log(grid_list);
}


function draw(){
    grid_list.forEach(gridblock => {
        gridblock.draw(ctx);
    });

}

window.onload = function(){
    init();
   window.requestAnimationFrame(gameloop);
}
