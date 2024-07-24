// HW1 ///
const gmailInput = document.querySelector('#gmail_input')
const gmailResult = document.querySelector('#gmail_result')
const gmailBtn = document.querySelector('#gmail_button')
const ValidSyntax = /^[a-z0-9]+@gmail\.com$/i

gmailBtn.onclick = () => {
    if (ValidSyntax.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK!'
        gmailResult.style.color = 'green'
    } else {
         gmailResult.innerHTML = 'NOT OK!'
         gmailResult.style.color = 'red'
    }
}


const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')
const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight

let positionX = 0
let positionY = 0
const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }else if (positionX >= 0 && positionY <= offsetHeight) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX <= 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }
}
moveBlock()

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let seconds = document.getElementById("seconds");
let count = 0;
let intervalId;

function fStart() {
    if(!intervalId){
        intervalId = setInterval(() => {
            count++;
            seconds.innerHTML = count;
        }, 1000);}
}

function fStop() {
    clearInterval(intervalId)
    intervalId = null

}

function fReset() {
    clearInterval(intervalId);
    intervalId = null
    count = 0;
    seconds.innerHTML = count;
}

stop.onclick = fStop;
start.onclick = fStart;
reset.onclick = fReset;




