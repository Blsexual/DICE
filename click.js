function mousedown(event){
 
    click.x = event.clientX;
    click.y = event.clientY;
    console.log(click.x + " " + click.y)

    if ((click.x > box1.x) && (click.x < box1.x + box1.width)){
        if ((click.y > box1.y) && (click.y < box1.y + box1.height)){         
            hp -= 1;
            console.log(hp);     
        }
    }

}