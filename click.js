
function mousedown(event){

 
    click.x = event.clientX;
    click.y = event.clientY;
    console.log(click.x + " " + click.y)

    if(combat > 0){
        if ((click.x > hitButton1.x) && (click.x < hitButton1.x + hitButton1.width)){
            if ((click.y > hitButton1.y) && (click.y < hitButton1.y + hitButton1.height)){         
                if(hp > 0){
                    sleep(1000);
                    damg = roll(5,11)
                    player_com.hp -= damg;
                    if(player_com.hp > 0){
                        player_com.hp = enemyHit(enemy1.mindm,enemy1.maxdm,player_com.hp)
                        console.log("enemy HP: "+ player_com.hp); 
                        console.log("player HP: "+ hp);  
                    }
                    else{
                        console.log("enemy dead");
                        map = 1;
                        combat = 0;
                        draw()
                    }
                }
                else{
                    console.log("you dead");
                }
    
                
            }
        }
        if ((click.x > hitButton2.x) && (click.x < hitButton2.x + hitButton2.width)){
            if ((click.y > hitButton2.y) && (click.y < hitButton2.y + hitButton2.height)){         
                if(hp > 0){
                    sleep(1000);
                    damg = roll(1,20)
                    player_com.hp -= damg;
                    if(player_com.hp > 0){
                        player_com.hp = enemyHit(enemy1.mindm,enemy1.maxdm,player_com.hp)
                        console.log("enemy HP: "+ player_com.hp); 
                        console.log("player HP: "+ hp);  
                    }
                    else{
                        console.log("enemy dead");
                        map = 1;
                        combat = 0;
                        draw()
                    }
                }
                else{
                    console.log("you dead");
                }
    
                
            }
        }
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