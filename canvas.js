//'use strict'
//Kanvasen skapas


//Creating the grid system for the map



class gridbox{
    constructor(x, y, color, width, height,){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}


function Path(){
    ctx.beginPath();
    ctx.fillStyle=grid_list[7].color="red";
}

grid_list.forEach(draw);

/*
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
/*
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
    document.getElementById("4:1").className = "path";
    document.getElementById("4:2").style.backgroundColor = "red";
    document.getElementById("4:2").className = "path";
    document.getElementById("4:3").style.backgroundColor = "red";
    document.getElementById("4:3").className = "path";
    document.getElementById("4:4").style.backgroundColor = "red";
    document.getElementById("4:4").className = "path";
    document.getElementById("4:5").style.backgroundColor = "red";
    document.getElementById("4:5").className = "path";
    document.getElementById("4:6").style.backgroundColor = "red";
    document.getElementById("4:6").className = "path";
    document.getElementById("4:7").style.backgroundColor = "red";
    document.getElementById("4:7").className = "path";
    document.getElementById("4:8").style.backgroundColor = "red";
    document.getElementById("4:8").className = "path";
    document.getElementById("4:9").style.backgroundColor = "red";
    document.getElementById("4:9").className = "path";

}
*/