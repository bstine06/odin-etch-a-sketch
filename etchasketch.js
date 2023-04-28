const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
    const newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    newPixel.addEventListener('mouseover', draw);
    gridContainer.appendChild(newPixel);
}

function draw() {
    this.classList.add('drawn');
}