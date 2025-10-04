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
let width = 560 / divCount;
let height = 560 / divCount;
let square;
let AMOUNTOFDIVS = divCount ** 2 ;
let userDivCount = 0;


function resetGrid(){
    div.textContent = ''
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
    width = 560 / divCount;
    height = 560 / divCount;
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

        event.target.style.backgroundColor = 'red';
            //square.style.backgroundColor = 'red';
    });

      square.addEventListener('mouseout', (event) =>{
        event.target.style.backgroundColor = 'rgb(6, 132, 174)';
        //square.style.backgroundColor = 'rgb(6, 132, 174)';
    });
   

     div.appendChild(square);
    console.log("square created");
    
 }

 
  
};


generateGrids();




/**Initial Attempt 
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


*/

















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