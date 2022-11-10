
let btstart = new Image();
btstart.src = "img/start.png";

let hp = 50;

let click = {x:null,y:null};

let box1 = {x:0,y:0,width:771/4,height:264/4}; //? idk
let box2 = {x:650,y:400,width:771/4,height:264/4}; //? idk


window.onload = function() {
    var canvas = document.getElementById("Canvas");
    canvas.addEventListener("mousedown", mousedown);
    var ctx = canvas.getContext("2d"); 
    ctx.drawImage(btstart,box1.x,box1.y,box1.width,box1.height);
  };



