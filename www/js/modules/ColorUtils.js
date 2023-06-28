import { getRandomIntInclusive } from './Random.js';

export function getRandomColor() {
    const red = getRandomIntInclusive(0, 255);
    const blue = getRandomIntInclusive(0, 255);
    const green = getRandomIntInclusive(0, 255);

    return `rgb(${red},${green},${blue})`;
}

export function getRandomColors(n) {
    n = Number(n);
    
    const colors = [];
    for (let i = 0; i < n; i++) {
        colors[i] = getRandomColor();
    }

    return colors;
}