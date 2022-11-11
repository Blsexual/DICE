
function mousedown(event){

 
    click.x = event.clientX;
    click.y = event.clientY;
    console.log(click.x + " " + click.y)

    if(combat > 0){
        if ((click.x > hitButton.x) && (click.x < hitButton.x + hitButton.width)){
            if ((click.y > hitButton.y) && (click.y < hitButton.y + hitButton.height)){         
                if(hp > 0){
                    sleep(1000);
                    damg = roll(player1.mindm,player1.maxdm)
                    enemy1.hp -= damg;
                    if(enemy1.hp > 0){
                        player1.hp = enemyHit(enemy1.mindm,enemy1.maxdm,player1.hp)
                        console.log("enemy HP: "+ enemy1.hp); 
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
                window.requestAnimationFrame(gameloop);
            }       
        }
    }

}