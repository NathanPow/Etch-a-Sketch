//Pseudocode
/** Create a fucntion to generate the grid
 * Claculate the number of squares needed(16x16 =256)
 * Use a lopp to create each div element
 * Set appropriate classes/attributes for styling 
 * Append each div to the container
 * 
 * 
 */


let AMOUNTOFDIVS = 256; // 16 * 16 = 256
let square = 0;
let size = 0;


const div = document.querySelector("#container");
const button = document.querySelector("#prompt");

button.addEventListener("click", () => {
 size = parseInt(prompt("Enter the size of the grid you would like : " ));
 console.log(size);
 console.log(typeof size);

 
      if(size > 0 && size <=100){
        square.style.width = `${size}px`
        square.style.height = `${size}px`
        AMOUNTOFDIVS = 512 / size;
    };

});


function resetGrid() {
    square.style.width = "0px";
    square.style.height = "0px";

};
    
function generateGrid(size) {



    for(let i = 1; i <= AMOUNTOFDIVS;i++){   
    square = document.createElement("div");
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
console.log(size);




















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