const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
    const newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    gridContainer.appendChild(newPixel);
}