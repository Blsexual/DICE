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
    var block1 = document.getElementById("4:1").style.backgroundColor = "red";
    var block2 = document.getElementById("4:2").style.backgroundColor = "red";
    var block3 = document.getElementById("4:3").style.backgroundColor = "red";
    var block4 = document.getElementById("4:4").style.backgroundColor = "red";
    var block5 = document.getElementById("4:5").style.backgroundColor = "red";
    var block6 = document.getElementById("4:6").style.backgroundColor = "red";
    var block7 = document.getElementById("4:7").style.backgroundColor = "red";
    var block8 = document.getElementById("4:8").style.backgroundColor = "red";
    var block9 = document.getElementById("4:9").style.backgroundColor = "red";
    var block10 = document.getElementById("4:10").style.backgroundColor = "red";
    var block11 = document.getElementById("4:11").style.backgroundColor = "red";
    var block12 = document.getElementById("4:12").style.backgroundColor = "red";
    var block13 = document.getElementById("4:13").style.backgroundColor = "red";
    document.getElementById("4:14").style.backgroundColor = "red";
    document.getElementById("4:15").style.backgroundColor = "red";
    document.getElementById("4:16").style.backgroundColor = "red";
    document.getElementById("4:17").style.backgroundColor = "red";
    document.getElementById("4:18").style.backgroundColor = "red";

    document.getElementById("1:13").style.backgroundColor = "red";
    document.getElementById("2:13").style.backgroundColor = "red";
    document.getElementById("3:13").style.backgroundColor = "red";
    document.getElementById("5:13").style.backgroundColor = "red";
    document.getElementById("6:13").style.backgroundColor = "red";
    document.getElementById("7:13").style.backgroundColor = "red";

    document.getElementById("7:14").style.backgroundColor = "red";
    document.getElementById("7:15").style.backgroundColor = "red";
    document.getElementById("7:16").style.backgroundColor = "red";
    document.getElementById("7:17").style.backgroundColor = "red";
    document.getElementById("7:18").style.backgroundColor = "red";

    document.getElementById("1:14").style.backgroundColor = "red";
    document.getElementById("1:15").style.backgroundColor = "red";
    document.getElementById("1:16").style.backgroundColor = "red";
    document.getElementById("1:17").style.backgroundColor = "red";
    document.getElementById("1:18").style.backgroundColor = "red";

    let path_way = [block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13];
}



function gameloop(){
    makeRows(8, 18);
    Path();
}

window.onload = function(){
   window.requestAnimationFrame(gameloop);
}
