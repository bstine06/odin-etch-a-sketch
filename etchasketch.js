const GRID_CONTAINER = document.querySelector('#gridContainer');
const DIMENSIONS_BUTTON = document.querySelector('#dimensionsButton');
let gridDimensions = 16;
let pixelWidth = 5;

dimensionsButton.addEventListener('click', updateDimensions);

function updateDimensions() {
    do {
        gridDimensions = prompt("enter a new dimension (must be a number between 1 and 100):");
    } while (gridDimensions > 100 || gridDimensions < 1 || isNaN(gridDimensions));
    newSketch(gridDimensions);
}

function newSketch(gridDimensions) {
    pixelWidth = 80/gridDimensions;
    removeAllChildNodes(gridContainer);
    for (let i = 0; i < gridDimensions*gridDimensions; i++) {
        const newPixel = document.createElement('div');
        newPixel.classList.add('pixel');
        newPixel.addEventListener('mouseover', draw);
        newPixel.style.width = pixelWidth + "vw";
        newPixel.style.height = pixelWidth + "vw";
        newPixel.style.opacity = "0";
        gridContainer.appendChild(newPixel);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function draw() {
    this.style.opacity = +this.style.opacity + .1;
    console.log(this.style.opacity);
}

newSketch(16);