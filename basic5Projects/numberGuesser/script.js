
// generating a random number from 1 to 100
const lower = 1;
const high = 100;
const num = Math.floor(Math.random()*high)+lower;
console.log(num);


const submit = document.querySelector('#submt');
const userInput = document.querySelector('#guessField');
const guessSlot =document.querySelector('.guess'); 
const remianing = document.querySelector('.remianing');
const loworHigh = document.querySelector('.lowOrHigh');
const resultPars = document.querySelector('.resultPars');


let playOn = true;
let remain = 9;
let guessArray = [];

remianing.textContent=remain;

submit.addEventListener('click',(event)=>{
    event.preventDefault();
    let input = userInput.value;
    
    if(remain <1) playOn=false;

    //match the input 
    if(input == num && playOn == true){
        loworHigh.innerHTML='<span>'+'You won Congrats'+'</span>'
        remain=9;
        guessArray=[];
        remianing.textContent=remain;
        guessSlot.innerHTML=guessArray;
        location.reload();
    }
    else if(playOn == true){
        //decreasing the remianing chances 
        //also populate the array of past guessed numbers 
        remain-=1;
        remianing.textContent=remain;
        guessArray.push(input);
        guessSlot.innerHTML=guessArray;
        if(input < num){
            loworHigh.textContent='guess high';
        }
        else{
            loworHigh.textContent='guess Low';
        }
    }
    else{
        //case where your chances are over 
        loworHigh.textContent='You have lost the game ';
        remain=9;
        guessArray=[];
        remianing.textContent=remain;
        guessSlot.innerHTML=guessArray;
        setTimeout(()=>{
            console.log('game is over ');
        },1000)
        location.reload();
    }
    
})
