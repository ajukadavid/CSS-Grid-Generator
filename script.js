// import needed elements namely: grid container and buttons
let container = document.querySelector('#container');
var clearButton = document.getElementById("clear");
let num = document.querySelector("#num");

function createBoxes(numBox){
  //create grid template rows
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    //loop through the input value and create corresponding divs on the x and y axis
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.classList.add('box');
        container.appendChild(square);
    }
}
//function to get value from user and change to number to be passed into the createBoxes function
function send() {
  //change input to number
      let value =  parseInt(num.value)
      if(value > 12) {
        //alert user if the value is more than the maximum input
        alert('Error: value is more than max input allowed. ')
       
      } else {
        createBoxes(value)  
        
      }
      
}

//clears the grid
var clear = clearButton.onclick = function() {
  
num.value = ''
  container.innerHTML = ''
  
}



