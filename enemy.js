
class enemyclass{
    constructor(enemyhp, mindm, maxdm, img, x, y, width, height){
        this.hp = enemyhp
        this.mindm = mindm
        this.maxdm = maxdm
        this.img = img
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        ctx.fillText("HP: " + this.hp, this.x, this.y);
        ctx.closePath();
    }
}

function enemyHit(mindm, maxdm, hp){
    dm = roll(mindm,maxdm);
    hp -= dm;
    return hp
}