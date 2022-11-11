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
    constructor(playerhp, mindm, maxdm, img, x, y, width, height){
        this.x = x;
        this.y = y;
        this.img = img
        this.width = width;
        this.height = height;
        this.hp = playerhp
        this.mindm = mindm
        this.maxdm = maxdm
        

    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
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
            console.log(room);
            if(bertPos == room){
                bertInRoom = 1;
            }
        })
        if(bertInRoom < 1){
            px -= movementSpeed; 
            bertPosX -= 1;
            bertPos = bertPosX+":"+bertPosY;
        }
        console.log(bertInRoom);
        console.log(bertPos);
        
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
            console.log(room);
            if(bertPos == room){
                bertInRoom = 1;
            }
        })
        if(bertInRoom < 1){
            px += movementSpeed; 
            bertPosX += 1;
            bertPos = bertPosX+":"+bertPosY;
        }
        console.log(bertInRoom);
        console.log(bertPos);
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
            console.log(room);
            if(bertPos == room){
                bertInRoom = 1;
            }
        })
        if(bertInRoom < 1){
            py += movementSpeed; 
            bertPosY += 1;
            bertPos = bertPosX+":"+bertPosY;
        }
        console.log(bertInRoom);
        console.log(bertPos);
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
            console.log(room);
            if(bertPos == room){
                bertInRoom = 1;
            }
        })
        if(bertInRoom < 1){
            py -= movementSpeed; 
            bertPosY -= 1;
            bertPos = bertPosX+":"+bertPosY;
        }
        console.log(bertInRoom);
        console.log(bertPos);
    }
    bertInRoom = 0;
    draw();
}


/*
    else if (e.key == "ArrowLeft" || e.key == "a"){  
        x --;
        if (){
            x++;
        } 
    }
    else if (e.key == "ArrowUp" || e.key == "w"){
        y --;
        if (){
            y++;
        } 
    }
    else if (e.key == "ArrowDown" || e.key == "s"){
        y ++;
        if (){
            y--;
        }

    }

    if (x > 18){
        x = 18;
    }
    if (x < 1){
        x = 1
    }
    if (y > 8){
        y = 8
    }
    if (y < 1){
        y = 1
    }

}

*/
