// import needed elements namely: grid container and buttons
let container = document.querySelector('#container');
var clearButton = document.getElementById("clear");
let num = document.querySelector("#num");

function createBoxes(numBox){
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.classList.add('box');
        container.appendChild(square);
    }
}

function send() {
      let value =  parseInt(num.value)
      if(value > 12) {
        alert('Value too high!')
        container.innerHTML = ''
       
      } else {
        createBoxes(value)  
        
      }
      
}

var clear = clearButton.onclick = function() {
  
num.value = ''
  container.innerHTML = ''
  
}



