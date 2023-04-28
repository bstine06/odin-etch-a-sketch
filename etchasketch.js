const GRID_CONTAINER = document.querySelector('#gridContainer');
const DIMENSIONS_BUTTON = document.querySelector('#dimensionsButton');
let gridDimensions = 16;
let pixelWidth = 5;

dimensionsButton.addEventListener('click', updateDimensions);

function updateDimensions() {
    do {
        gridDimensions = prompt("enter a new dimension (must be 100 or lower):");
    } while (gridDimensions > 100);
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
        gridContainer.appendChild(newPixel);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function draw() {
    this.classList.add('drawn');
}

newSketch(16);