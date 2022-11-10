
/*

addEventListener('keydown', move);
let x = 1
let y = 4


function move(e){
    let oldx = x;
    let oldy = y;
    let oldcolor = "red";
    document.getElementById(oldy+":"+oldx).style.backgroundColor = oldcolor;
    console.log (x)
    console.log (y)
    

    if (e.key == "ArrowRight" || e.key == "d"){
        x ++ 
        if (document.getElementById(y+":"+x).style.backgroundColor != "red") {
            x--
        }    
    }
    else if (e.key == "ArrowLeft" || e.key == "a"){  
        x --  
        if (document.getElementById(y+":"+x).style.backgroundColor != "red") {
            x++
        } 
    }
    else if (e.key == "ArrowUp" || e.key == "w"){
        y --
        if (document.getElementById(y+":"+x).style.backgroundColor != "red") {
            y++
        } 
    }
    else if (e.key == "ArrowDown" || e.key == "s"){
        y ++
        if (document.getElementById(y+":"+x).style.backgroundColor != "red") {
            y--
        } 
    }
    
    if (x > 16){
        x = 16;
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
    document.getElementById(y+":"+x).style.backgroundColor = "green";
}*/