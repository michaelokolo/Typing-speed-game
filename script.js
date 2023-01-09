const textWrapper = document.querySelector('.text-wrapper');
const textArea = document.querySelector('textarea');
const originText = document.querySelector('.text');
const resetButton = document.querySelector('.btn');
const theTimer = document.querySelector('.timer');

let timer = [2,3,6,0];

// Add leading zero to numbers 9

function leadingZero(time){
    if(time <= 9){
        time = "0" + time;
    }

    return time;
}
//Create a Clock

function runTimer(){
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}
//Reset everything function
function reset(){
    
}
//Match the text with provided text on the page
function spellCheck(){
    
}
//Start the timer function
function start(){
    let textEnteredLength = textArea.value.length;
    if(textEnteredLength === 0){
        setInterval(runTimer, 10);
    }
}
//Eventlisteners for keyboad input and reset button event
textArea.addEventListener('keypress', start , false);
textArea.addEventListener('keyup', spellCheck, false);
resetButton.addEventListener('click', reset, false)