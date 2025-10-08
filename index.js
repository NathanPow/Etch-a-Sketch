//Pseudocode
/** Create a fucntion to generate the grid
 * Calculate the number of squares needed(16x16 =256)
 * Use a lopp to create each div element
 * Set appropriate classes/attributes for styling 
 * Append each div to the container
 * Utilizes Mouve Events to highlight individual squares 
 * Square reverts to normal when Mouse leaves 
 * 
 * 
 * Add button fucntionlity 
 * Btn for Changing Grid Size 
 * Prompt the user to decide width and height 
 * If grid size changes it would try to implement the in that fixed size i.e 720px*
 * If you change the width and height of grid the the amount of grids would by virtue need to change  
 * 
 */


const div = document.querySelector('#container');
const btn1 = document.querySelector('#btn1');

let divCount = 16;
const container = 660;
let width = container / divCount;
let height = container / divCount;
let square;
let AMOUNTOFDIVS = divCount ** 2 ;
let userDivCount = 0;
const colourArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const INITIAL_OPACITY = 0.1;



function resetGrid(){
    div.textContent = ''
};



function getRandomNumber(){
 let randomNumber = Math.floor(Math.random() * colourArr.length);
 return randomNumber;
}



function randomizeColour (){
 let colourStr = '';

   for(let j = 1;j <= 6; j++){
    colourStr += colourArr[getRandomNumber()];
   }
   // console.log(colourStr)
   return colourStr;
};




 btn1.addEventListener('click', () =>{
 userDivCount = parseInt(window.prompt("Enter a number between 1 - 100 to change the grid size.", ));

    if(userDivCount === null || userDivCount === undefined){
        window.alert('Please Enter a number with the range 1 - 100.')
        console.log(userDivCount);
    }
    else if(userDivCount > 0 && userDivCount <= 100){
    resetGrid();
    divCount = userDivCount;
    width = container / divCount;
    height = container / divCount;
    AMOUNTOFDIVS = divCount ** 2 ;
    generateGrids();


    console.log(typeof userDivCount);
    console.log(divCount);
    console.log(width);
    }
    else{
        console.log(userDivCount);
        console.log(divCount);
    }

});





function generateGrids (){


 for(let i = 1;i <= AMOUNTOFDIVS;i++){
    square = document.createElement("div");
    square.style.width = `${width}px`;
    square.style.height = `${height}px`;
    square.classList.add('square');

        square.addEventListener('mouseover', (event) =>{
            //Used event.target to directly target square rather that CSS 

        event.target.style.backgroundColor = `#${randomizeColour()}`;
            //square.style.backgroundColor = 'red';
    });

    square.addEventListener('mouseout', (event) => {
    // Get current color from data attribute or use the current background color
    let currentColor = event.target.dataset.currentColor || event.target.style.backgroundColor;
    
    // If no color is set yet, use the current blue as starting point
    if (!currentColor || currentColor === 'black') {
        currentColor = 'rgb(6, 132, 174)';
    }
    
    // Parse RGB values
    const rgb = currentColor.match(/\d+/g).map(Number);
    
    // Reduce each RGB value by 10% (darken by 10%)
    const darkenedRGB = rgb.map(value => {
        const newValue = Math.max(0, Math.floor(value * 0.9)); // 10% darker
        return newValue;
    });
    
    // Create new color
    const newColor = `rgb(${darkenedRGB[0]}, ${darkenedRGB[1]}, ${darkenedRGB[2]})`;
    
    // Apply the darkened color
    event.target.style.backgroundColor = newColor;
    event.target.dataset.currentColor = newColor;
    
    // Remove opacity since we're using actual RGB darkening
    event.target.style.opacity = '1';
});
  


     div.appendChild(square);
    console.log("squares created");  
 }
};



generateGrids();



/**
 * 
 * 
 * 
     square.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "blue";
        });

         square.addEventListener('mouseout', () => {
            square.style.backgroundColor = "lightblue";
        });
    });








      square.addEventListener('mouseout', (event) => {
    // Get current opacity from data attribute or default to 0
    let currentOpacity = parseFloat(event.target.dataset.opacity) || 0;
    
    // Increment opacity by 0.1 (10 steps to reach 1.0)
    if (currentOpacity < 1.0) {
        currentOpacity += 0.1;
        currentOpacity = Math.min(currentOpacity, 1.0);
    }
    
    // Update opacity
    event.target.style.opacity = currentOpacity;
    event.target.dataset.opacity = currentOpacity;
    
    // Set background color to progressively darker
    // As opacity increases, the black background becomes more visible
    event.target.style.backgroundColor = 'black';
    
    // Optional: Keep some blue tint by mixing colors
    // event.target.style.backgroundColor = `rgba(6, 132, 174, ${1 - currentOpacity})`;
});
 */