
function mousedown(event){

    click.x = event.clientX;
    click.y = event.clientY;
    console.log(click.x + " " + click.y)
    console.log("start enemy HP: "+ enemy.hp); 
    console.log("start player HP: "+ player_com.hp);  


    if(combat > 0){
    /*-----------------------------------------
                    weapon 1
    -----------------------------------------*/
        if ((click.x > weapon1.x) && (click.x < weapon1.x + weapon1.width)){
            if ((click.y > weapon1.y) && (click.y < weapon1.y + weapon1.height)){        
                sleep(1000);
                damg = roll(weapon1.mindm,weapon1.maxdm)
                enemy.hp -= damg;
                if(enemy.hp <= 0){
                    console.log("enemy dead");
                    map = 1;
                    combat = 0;
                    draw()
                }
                else{
                    player_com.hp = enemyHit(enemy.mindm,enemy.maxdm,player_com.hp)
                    console.log("enemy HP: "+ enemy.hp); 
                    console.log("player HP: "+ player_com.hp);  
                }
            }
        }
    /*-----------------------------------------
                    weapon 2
    -----------------------------------------*/
        if ((click.x > weapon2.x) && (click.x < weapon2.x + weapon2.width)){
            if ((click.y > weapon2.y) && (click.y < weapon2.y + weapon2.height)){         
                sleep(1000);
                damg = roll(weapon2.mindm,weapon2.maxdm)
                enemy.hp -= damg;
                if(enemy.hp <= 0){
                    console.log("enemy dead");
                    map = 1;
                    combat = 0;
                    draw()
                }
                else{
                player_com.hp = enemyHit(enemy.mindm,enemy.maxdm,player_com.hp)
                console.log("enemy HP: "+ enemy.hp); 
                console.log("player HP: "+ player_com.hp);   
                } 
            }
        }
    /*-----------------------------------------
                    heal
    -----------------------------------------*/

        if ((click.x > heal1.x) && (click.x < heal1.x + heal1.width)){
            if ((click.y > heal1.y) && (click.y < heal1.y + heal1.height)){             
                sleep(1000);
                damg = roll(heal1.minhp,heal1.maxhp)
                player_com.hp += damg;
                if (player_com.hp > 10){
                    player_com.hp = 10;
                }
                player_com.hp = enemyHit(enemy.mindm,enemy.maxdm,player_com.hp)
                console.log("enemy HP: "+ enemy.hp); 
                console.log("player HP: "+ player_com.hp);   
            }
        }
        if(player_com.hp <= 0){
            console.log("you are dead")
            alert("you are dead stop resisting")
        }
        
        draw()
        
    }
    

    if ((click.x > fullCanvas.x) && (click.x < fullCanvas.x + fullCanvas.width)){
        if ((click.y > fullCanvas.y) && (click.y < fullCanvas.y + fullCanvas.height)){  
            if(main > 0){
                main = 0;
                map = 1;
                console.log("main"+main+"map"+map);  
                draw();
            }       
        }
    }
}