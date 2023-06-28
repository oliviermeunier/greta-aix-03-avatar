import { getRandomIntInclusive } from '../Random.js';

export default class AvatarMatrix {
    constructor(size = 2, colors = ['white', 'black']) {
        this.size = size;
        this.colors = colors;
        this.matrix = this.generateMatrix();
    }

    generateMatrix() {
        const matrix = Array.from({length: this.size}, row => Array.from({length: this.size}, row => null));

        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                const randomColorIndex = getRandomIntInclusive(0, this.colors.length - 1); 
                matrix[x][y] = matrix[this.size -1 - x][y] = this.colors[randomColorIndex];
            }
        }

        return matrix;
    }

    getSize() {
        return this.size;
    }

    getMatrix() {
        return this.matrix;
    }

}