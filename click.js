
function mousedown(event){

 
    click.x = event.clientX;
    click.y = event.clientY;
    console.log(click.x + " " + click.y)

    if(combat > 0){
        if ((click.x > hitButton.x) && (click.x < hitButton.x + hitButton.width)){
            if ((click.y > hitButton.y) && (click.y < hitButton.y + hitButton.height)){         
                if(hp > 0){
                    sleep(1000);
                    damg = roll(player_com.mindm,player_com.maxdm)
                    player_com.hp -= damg;
                    if(player_com.hp > 0){
                        player1.hp = enemyHit(player_com.mindm,player_com.maxdm,player1.hp)
                        console.log("enemy HP: "+ player_com.hp); 
                        console.log("player HP: "+ hp);  
                    }
                    else{
                        console.log("enemy dead");
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