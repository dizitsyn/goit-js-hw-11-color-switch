const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

startRef.addEventListener('click', starting)
stopRef.addEventListener('click', stoping)

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

 const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let setIntervalId;

function starting() {
    startRef.setAttribute('disabled', true)
    return setIntervalId = setInterval(colorChenging,1000)    
}

function stoping() {
    startRef.removeAttribute('disabled')
    clearInterval(setIntervalId);
}

function colorChenging() {
    const randomNum = randomIntegerFromInterval(0, 5);
    const color = colors[randomNum];
    console.log(color);
    bodyRef.style.backgroundColor = `${color}`;
 }


 












