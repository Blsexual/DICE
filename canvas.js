//'use strict'
//Kanvasen skapas
var canvas = document.getElementById("Canvas"); 
var ctx = canvas.getContext("2d");


//Creating the grid system for the map
let grid_list = [];

/*
class Grid{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}


for(let i=0; i<5; i++){
    let block = new Grid(250,250,"black");
    grid_list_x.push(block);
}




function gridY(){
    for(let i=0; i<3; i++){
        ctx.beginPath();   
        let block = new Grid(250,250,"black");
        grid_list_y.push(block);
        ctx.rect(0, 0, block.width, block.height);
    } 
}


//creating the path for the player to move on the map grid
class Path{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}
*/




// Sets important constants and variables

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  let x = 1;
  let y = 1;
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", y + ":" + x);
    x++;
    if(x > cols){
        x = 1;
        y++;
    }
    container.appendChild(cell).className = "grid-item";
  };
};

function Path(){
    document.getElementById("4:1").style.backgroundColor = "red";
    document.getElementById("4:2").style.backgroundColor = "red";
    document.getElementById("4:3").style.backgroundColor = "red";
    document.getElementById("4:4").style.backgroundColor = "red";
    document.getElementById("4:5").style.backgroundColor = "red";
    document.getElementById("4:6").style.backgroundColor = "red";
    document.getElementById("4:7").style.backgroundColor = "red";
    document.getElementById("4:8").style.backgroundColor = "red";
    document.getElementById("4:9").style.backgroundColor = "red";
}

function gameloop(){
    makeRows(8, 16);
    Path();
}

window.onload = function(){
   window.requestAnimationFrame(gameloop);
}
