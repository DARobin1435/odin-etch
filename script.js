
const titleDiv = document.querySelector(".title");
const containerDiv = document.querySelector(".container");
const gridDiv = document.querySelector(".grid");
const resetButton = document.querySelector('.reset-button');

const cellValue = 50;

let colorMod = 0;
let newDiv = null;

function getRandomRGB(){
    let redValue = 0;
    let greenValue = 0;
    let blueValue = 0;
    let rgbValues = null;
    const values = [redValue, greenValue, blueValue];

    values.forEach(value =>{

        value = Math.floor(Math.random() * 256)
   
    })

    rgbValues = rgb(redValue, greenValue, blueValue);

    return rgbValues;
}

function makeGrid(num = 16){

    // num && typeof num == "string" ? num = parseInt(num): num;
    let containerDivWidth = parseInt(num) * cellValue;
    containerDiv.style.width = `"${containerDivWidth}px"`;
    // containerDiv.style.width = `"${num * cellValue}px"`;
 
    for (let i = 0; i < num; i++){

        for (let j = 0; j < num; j++){

            newDiv = document.createElement('div');
            // newDiv.style.width = `"${cellValue}px"`;
            // newDiv.style.height = `"${cellValue}px"`;
            newDiv.style.width = "50px";
            newDiv.style.height = "50px";

            containerDiv.appendChild(newDiv);
        }

    }
}

// Remove all current squares before appending new squares
function clearGrid(){

    let allSquares = document.querySelectorAll('.squares');
    allSquares.forEach((square)=>{
        containerDiv.removeChild(square);
    });
}

// Accepts value as input and uses that to output the number of squares
function resetGrid(){
    
    let inputValue = document.querySelector('.grid-count');

    if (inputValue.value <= 100 && inputValue.value >= 1){

        clearGrid();
        makeGrid(inputValue.value);
    
    }else {

        return;
    
    }

}

// Event Listener for Reset Button
resetButton.addEventListener('click', (e)=>{

    resetGrid();
})
// Function Calls;
makeGrid();