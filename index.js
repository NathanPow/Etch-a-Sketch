//Pseudocode
/** Create a fucntion to generate the grid
 * Claculate the number of squares needed(16x16 =256)
 * Use a lopp to create each div element
 * Set appropriate classes/attributes for styling 
 * Append each div to the container
 * 
 * 
 */


const AMOUNTOFDIVS = 256; // 16 * 16 = 256
const AMOUNTOFROWSANDCOLUMNS = 16; 
let size = 0;


const div = document.querySelector("#container");
const button = document.querySelector("#prompt");

button.addEventListener("click", () => {
 size = prompt("Enter the size of the grid you would like : ", size);
 console.log(size);
});

function resetGrid() {
    square.style.width = "0px";
    square.style.height = "0px";

};
    
function generateGrid() {
    
      if(size > 0){
        square.style.width = `${size}px`
        square.style.height = `${size}px`
    };


    for(let i = 1; i <= AMOUNTOFDIVS;i++){   
    const square = document.createElement("div");
    square.style.width = "32px";
    square.style.height = "32px";
    square.classList.add('square');

       square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "blue";
        }); 
         square.addEventListener('mouseout', () => {
            square.style.backgroundColor = "lightblue";
        });
    div.appendChild(square); 
    console.log("square created"); 


  
    }

};



generateGrid();




















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
 */