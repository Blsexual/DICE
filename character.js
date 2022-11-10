
addEventListener('keydown', move);
let speed = 10;
let x = 50;
let y = 50;
let width = 20;
let height = 10;


class character{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    drawCharacter(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

let protag = new character(x,y,width,height,"green");
protag.drawCharacter()

function move(e){
    console.log(canvas.width)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (e.key == "ArrowRight" || e.key == "d"){
        protag.x += speed;   
    }
    else if (e.key == "ArrowLeft" || e.key == "a"){
        protag.x -= speed; 
    }
    else if (e.key == "ArrowUp" || e.key == "w"){
        protag.y -= speed;   
    }
    else if (e.key == "ArrowDown" || e.key == "s"){
        protag.y += speed;    
    }
    if (protag.x < 0){
        protag.x = 0
    }
    if (protag.x > (canvas.width - width)){
        protag.x = canvas.width - width
    }
    if (protag.y < 0){
        protag.y = 0
    }
    if (protag.y > (canvas.height - height)){
        protag.y = canvas.height - height
    }
    protag.drawCharacter()

}