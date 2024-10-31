const image = document.getElementById('movableImage');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let posX = 0;
let posY = 0;

function moveImage(dx, dy) {
    const container = document.querySelector('.container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const imageWidth = image.clientWidth;
    const imageHeight = image.clientHeight;

  
    posX += dx;
    posY += dy;

   
    if (posX < 0) posX = 0;
    if (posX > containerWidth - imageWidth) posX = containerWidth - imageWidth;
    if (posY < 0) posY = 0;
    if (posY > containerHeight - imageHeight) posY = containerHeight - imageHeight;

   
    image.style.transform = `translate(${posX}px, ${posY}px)`;
}


upButton.addEventListener('click', () => moveImage(0, -10));
downButton.addEventListener('click', () => moveImage(0, 10));
leftButton.addEventListener('click', () => moveImage(-10, 0));
rightButton.addEventListener('click', () => moveImage(10, 0));
