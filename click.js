
function mousedown(event){

    click.x = event.clientX;
    click.y = event.clientY;
    console.log(click.x + " " + click.y)
    console.log("start enemy HP: "+ enemy.hp); 
    console.log("start player HP: "+ player_com.hp);  
    if(combat > 0){
        if ((click.x > hitButton1.x) && (click.x < hitButton1.x + hitButton1.width)){
            if ((click.y > hitButton1.y) && (click.y < hitButton1.y + hitButton1.height)){              
                sleep(1000);
                damg = roll(5,10)
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
        if ((click.x > hitButton2.x) && (click.x < hitButton2.x + hitButton2.width)){
            if ((click.y > hitButton2.y) && (click.y < hitButton2.y + hitButton2.height)){         
                sleep(1000);
                damg = roll(1,20)
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