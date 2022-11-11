function innit(){
  rollDice();
}

function sleep(ms){
  let start = new Date().getTime();
  let end = start;
  while (end < (start + ms)){
    end = new Date().getTime();
  }
}

function rollDice(){
  document.getElementById('d20').innerHTML = roll(1,20)
}

function roll(min, max){
  let rollResult = 0;
  eand = Math.random()
  rollResult = Math.floor(eand * (max - min) + min);
  return rollResult;
}



 
