class path{
    constructor(x, y, color, width, height, pos){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.pos = pos;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
function room(){
    let rooms = [];
    let room1 = "red";
    let room2 = "pink";
    let room3 = "black";
    roomRand = roll(1,3);
    if(roomRand == 1){
        rooms.push(room1);
    }
    if(roomRand == 2){
        rooms.push(room2);
    }
    if(roomRand == 3){
        rooms.push(room3);
    }
    return rooms;
}