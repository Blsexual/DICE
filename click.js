
function mousedown(event){

 
    click.x = event.clientX;
    click.y = event.clientY;
    console.log(click.x + " " + click.y)

    if ((click.x > hitButton.x) && (click.x < hitButton.x + hitButton.width)){
        if ((click.y > hitButton.y) && (click.y < hitButton.y + hitButton.height)){         
            if(hp > 0){
                sleep(1000);
                damg = roll(1,10)
                enemy1.hp -= damg;
                if(enemy1.hp > 0){
                    hp = enemyHit(enemy1.mindm,enemy1.maxdm,hp)
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