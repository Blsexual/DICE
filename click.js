
function mousedown(event){

 
    click.x = event.clientX;
    click.y = event.clientY;
    console.log(click.x + " " + click.y)

    if ((click.x > box1.x) && (click.x < box1.x + box1.width)){
        if ((click.y > box1.y) && (click.y < box1.y + box1.height)){         
            if(hp > 0){
                sleep(1000);
                damg = roll(1,10)
                test.hp -= damg;
                if(test.hp > 0){
                    hp = enemyHit(1,5,hp)
                    console.log("enemy HP: "+ test.hp); 
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