
class weapon{
    constructor(mindm, maxdm, img, x, y, width, height){
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
        ctx.fillText("Damage: " + this.mindm + "-" + this.maxdm, this.x, this.y + this.height + 30);
        ctx.closePath();
    }
}

class heal{
    constructor(minhp, maxhp, img, x, y, width, height){
        this.minhp = minhp
        this.maxhp = maxhp
        this.img = img
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        ctx.fillText("Heal: " + this.minhp + "-" + this.maxhp, this.x, this.y + this.height + 30);
        ctx.closePath();
    }
}

