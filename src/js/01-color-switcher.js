const dataStart = document.querySelector('[data-start]');
const dataStop = document.querySelector ('[data-stop]')
const body = document.querySelector ('body');

dataStop.setAttribute('disabled',true);


dataStart.addEventListener('click',getRandomHexColor);
dataStop.addEventListener('click', onRemoveColor)

let timerID = 'null'

function getRandomHexColor() {
   timerID = setInterval (() => {let evt = `#${Math.floor(Math.random() * 16777215)
        .toString(16)}`;
     body.style.backgroundColor = evt;
     dataStart.setAttribute('disabled',true)
     dataStop.removeAttribute('disabled')
  }, 1000)
 };


function onRemoveColor () {
    dataStart.removeAttribute('disabled')
    dataStop.setAttribute('disabled',true)
    clearInterval(timerID);
 }



