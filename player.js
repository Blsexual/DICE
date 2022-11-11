
let x = 1
let y = 1
oldPosition = new gridbox(100*(x-1),100*(y-1),"red",100,100);

class player{
    constructor(playerhp, mindm, maxdm, img, x, y, width, height){
        this.hp = playerhp
        this.mindm = mindm
        this.maxdm = maxdm
        this.img = img
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        ctx.closePath();
    }
}




function move(event){

    key = event.keyCode
    console.log (x)
    console.log (y)
    
    

    if (key == 39 || key == 68){
        x ++; 
        //if (){
        //    x--;
        //}     
    }
    else if (key == 37 || key == 65){  
        x --;
        //if (){
        //    x++;
        //} 
    }
    else if (key == 38 || key == 87){
        y --;
        //if (){
        //    y++;
        //} 
    }
    else if (key == 40 || key == 83){
        y ++;
        //if (){
        //    y--;
        //}

    }
    startPosition = new gridbox(100*(x-1),100*(y-1),"green",100,100);
    oldPosition = new gridbox(100*(x-1),100*(y-1),"orange",100,100);
    grid_list.push(startPosition);
    grid_list.push(oldPosition);
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
