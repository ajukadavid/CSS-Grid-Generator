let container = document.querySelector('#container');
var clearButton = document.getElementById("clear");

function createBoxes(numBox){
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.classList.add('box');
        container.appendChild(square);
    }
}
let num = document.querySelector("#num");
function send() {
      let value =  parseInt(num.value)
      if(value > 12) {
        alert('Value too high!')
        return;
      } else {
        createBoxes(value)  
        
      }
      
}

var clear = clearButton.onclick = function(event) {
  
num.value = ''
  container.innerHTML = ''
  
}

clear()