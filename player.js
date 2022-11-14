
/*-----------------------------------------
            player on map
-----------------------------------------*/
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

/*-----------------------------------------
            player in combat
-----------------------------------------*/
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
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);       //ritar utt karaktär och hp på den
        ctx.fillText("HP: " + this.hp, this.x, this.y);
        ctx.closePath();
    }
}

/*-----------------------------------------
            moving on map
-----------------------------------------*/
function move(event){
    key = event.keyCode
    /*-----------------------------------------
                moving on right
    -----------------------------------------*/
    if(map > 0){
        if (key == 39 || key == 68){
            px += movementSpeed; 
            bertPosX += 1;
            moved = 1;
            if (px > 1300){
                px = 1300;
                bertPosX -= 1;
                moved = 0;
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
                moved = 0;
            }    
        }
        /*-----------------------------------------
                    moving on left
        -----------------------------------------*/
        else if (key == 37 || key == 65){  
            px -= movementSpeed;
            bertPosX -= 1;
            moved = 1;
            if (px < 0){
                px = 0;
                bertPosX += 1;
                moved = 0;
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
                moved = 0;
            }
        }
        /*-----------------------------------------
                    moving on upp
        -----------------------------------------*/
        else if (key == 38 || key == 87){
            py -= movementSpeed;
            bertPosY -= 1;
            moved = 1;
            if (py < 0){
                py = 0;
                bertPosY += 1;
                moved = 0;
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
                moved = 0;
            }
        }
        /*-----------------------------------------
                    moving on down
        -----------------------------------------*/
        else if (key == 40 || key == 83){
            py += movementSpeed;
            bertPosY += 1;
            moved = 1;
            if (py > 600){
                py = 600;
                bertPosY -= 1;
                moved = 0;
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
                moved = 0;
            }
        }
        /*-----------------------------------------
                        encounter
        -----------------------------------------*/
        
        if(moved > 0){
            path_list.forEach(pathBlock => {
                path_pos.forEach(pathPos => {
                    if(pathPos == pathBlock.pos){
                        if(bertPos == pathBlock.pos && pathBlock.color == "black"){
                            map = 0;
                            combat = 1;
                            etyp = roll(1,2)
                            ctx.fillStyle = "black";
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
                    }
                })
            });
            moved = 0;
        }
    }
    
    bertInRoom = 0;
    draw();
}

