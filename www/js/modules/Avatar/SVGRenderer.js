const SVGRenderer = {
    render(avatarMatrix) {
        const size = avatarMatrix.getSize() * 10;
        const matrix = avatarMatrix.getMatrix();
    
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">` ;

        for (let [x, col] of matrix.entries()) {
            x *= 10;
            for (let [y, color] of col.entries()) {
                y *= 10;
                svg += `<rect x="${x}" y="${y}" width="10" height="10" fill="${color}" />`;
            }
        }

        return svg += '</svg>';
    }
};

export default SVGRenderer;