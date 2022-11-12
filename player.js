class player{
    constructor(x, y, img, width, height, pos){
        this.x = x;
        this.y = y;
        this.img = img
        this.width = width;
        this.height = height;
        this.pos = pos;
    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        ctx.closePath();
    }
}

class player_combat{
    constructor(playerhp, img, x, y, width, height){
        this.x = x;
        this.y = y;
        this.img = img
        this.width = width;
        this.height = height;
        this.hp = playerhp
        

    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        ctx.fillText("HP: " + this.hp, this.x, this.y);
        ctx.closePath();
    }
}

function move(event){
    key = event.keyCode
    if (key == 39 || key == 68){
        px += movementSpeed; 
        bertPosX += 1;
        if (px > 1300){
            px = 1300;
            bertPosX -= 1;
        }     
        bertPos = bertPosX+":"+bertPosY;
        path_pos.forEach(room => {
            if(bertPos == room){
                bertInRoom = 1;
            }
        })
        if(bertInRoom < 1){
            px -= movementSpeed; 
            bertPosX -= 1;
            bertPos = bertPosX+":"+bertPosY;
        }    
    }
    else if (key == 37 || key == 65){  
        px -= movementSpeed;
        bertPosX -= 1;
        if (px < 0){
            px = 0;
            bertPosX += 1;
        }  
        bertPos = bertPosX+":"+bertPosY;
        path_pos.forEach(room => {
            if(bertPos == room){
                bertInRoom = 1;
            }
        })
        if(bertInRoom < 1){
            px += movementSpeed; 
            bertPosX += 1;
            bertPos = bertPosX+":"+bertPosY;
        }
    }
    else if (key == 38 || key == 87){
        py -= movementSpeed;
        bertPosY -= 1;
        if (py < 0){
            py = 0;
            bertPosY += 1;
        } 
        bertPos = bertPosX+":"+bertPosY;
        path_pos.forEach(room => {
            if(bertPos == room){
                bertInRoom = 1;
            }
        })
        if(bertInRoom < 1){
            py += movementSpeed; 
            bertPosY += 1;
            bertPos = bertPosX+":"+bertPosY;
        }
    }
    else if (key == 40 || key == 83){
        py += movementSpeed;
        bertPosY += 1;
        if (py > 600){
            py = 600;
            bertPosY -= 1;
        }       
        bertPos = bertPosX+":"+bertPosY;
        path_pos.forEach(room => {
            if(bertPos == room){
                bertInRoom = 1;
            }
        })
        if(bertInRoom < 1){
            py -= movementSpeed; 
            bertPosY -= 1;
            bertPos = bertPosX+":"+bertPosY;
        }
    }
    
    if(bertPos == pathBlock.pos && pathBlock.color == "black"){
        map = 0;
        combat = 1;
        etyp = roll(1,2)
        if (etyp == 1){
            enemy.hp = e1hp;
            enemy.img = head;
            enemy.y = 375;
        }
        else if (etyp == 2){
            enemy.hp = e2hp
            enemy.img = ghost
            enemy.y = 300;
        }
    }
    bertInRoom = 0;
    draw();
}

