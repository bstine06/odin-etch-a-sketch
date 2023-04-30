const GRID_CONTAINER = document.querySelector('#gridContainer');
const GRID_CONTAINER_VW = 50;
const dimensionsButton = document.querySelector('#dimensionsButton');
const modeButtons = document.querySelectorAll('.modeSelection');
const dimensionsSlider = document.querySelector('#dimensionsSlider');
let gridDimensions = 16;
let drawMode = "Default Mode";

function updateDimensions() {
    do {
        gridDimensions = prompt("enter a new dimension (must be a number between 1 and 100):");
    } while (gridDimensions > 100 || gridDimensions < 1 || isNaN(gridDimensions));
    newSketch(gridDimensions);
}

function updateDrawMode() {
    drawMode = this.textContent;
}

function newSketch(gridDimensions) {
    pixelWidth = GRID_CONTAINER_VW/gridDimensions;
    removeAllChildNodes(GRID_CONTAINER);
    for (let i = 0; i < gridDimensions*gridDimensions; i++) {
        const newPixel = document.createElement('div');
        newPixel.classList.add('pixel');
        newPixel.addEventListener('mouseover', draw);
        newPixel.style.width = pixelWidth + "vw";
        newPixel.style.height = pixelWidth + "vw";
        newPixel.style.opacity = "0";
        GRID_CONTAINER.appendChild(newPixel);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateRandomColor() {
    let randomR = Math.floor(Math.random()*256);
    let randomG = Math.floor(Math.random()*256);
    let randomB = Math.floor(Math.random()*256);
    return `rgb(${randomR},${randomG},${randomB})`;
}

function draw() {
    console.log("drawMode: " + drawMode);
    switch (drawMode) {
        case "Shading Mode":
            this.style.opacity = +this.style.opacity + .1;
            break;
        case "Default Mode":
            this.style.opacity = 1;
            break;
        case "Rainbow Mode":
            this.style.opacity = 1;
            let randomRGB = generateRandomColor();
            console.log(randomRGB);
            this.style.backgroundColor = randomRGB;
            break;
        case "Erase Mode":
            this.style.opacity = 0;
            break;
    }
}

dimensionsButton.addEventListener('click', updateDimensions);
for (let modeButton of modeButtons) {
    modeButton.addEventListener('click', updateDrawMode);
}

newSketch(16);