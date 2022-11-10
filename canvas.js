
let btstart = new Image();
btstart.src = "img/start.png";

let hp = 50;

let click = {x:null,y:null};

let box1 = {x:0,y:0,width:771/4,height:264/4}; //? idk

window.onload = function() {
    var canvas = document.getElementById("Canvas");
    canvas.addEventListener("mousedown", mousedown);
    var ctx = canvas.getContext("2d"); 
    ctx.drawImage(btstart,box1.x,box1.y,box1.width,box1.height);
  };


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