
const titleDiv = document.querySelector(".title");
const containerDiv = document.querySelector(".container");
const gridDiv = document.querySelector(".grid");
const resetButton = document.querySelector('.reset-button');
const input = document.querySelector('.grid-count');
const containerDivWidth = document.querySelector('.container').style.width;
const cellValue = 60;

let colorMod = 0;
let newDiv = null;



function randomHex(){
    let hex = "#";
    const values = [[0,1,2,3,4,5,6,7,8,9],['A','B','C','D', 'E', 'F']];
   
    for (i = 0; i < 6; i++){

        let arrayChoice = Math.floor(Math.random() * 2);
        let valueChoice = values[arrayChoice][
            Math.floor( Math.random() * values[arrayChoice].length)]
        hex += valueChoice;

    }

    return hex; 
}


// Create grid of squares with 16*16 as default value
function makeGrid(num = 16){

    num = parseInt(num)
    let flexValue = 1;
    if (num && num !== 16){
        // flexValue = `1 1 ${(num/800)*100}%`;
        flexValue = `1 1 2.5%`;

    }
    
    const myStyles = `
        width: ${cellValue}px;
        height: ${cellValue}px;
        flexBasis: ${flexValue};
    `

    // Dynamically make grid of width num and height num
    for (let i = 0; i < num; i++){
        for (let j = 0; j < num; j++){
            newDiv = document.createElement('div');
            newDiv.style.cssText = myStyles;
            newDiv.addEventListener('mouseover', (e)=>{
                e.target.style.backgroundColor = randomHex();
            })
            containerDiv.appendChild(newDiv);
        }
    }
}

// Remove all current squares before appending new squares
function clearGrid(){

    let allSquares = document.querySelectorAll('.container > div');
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
// Event Listener for Enter keypress when there is a value in the input text field
input.addEventListener('keydown', (e)=>{
    e.key == "Enter" && input.value ? resetGrid() : null;
})
// Function Calls;
makeGrid();
