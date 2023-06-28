const SVGRenderer = {
    render(avatarMatrix) {
        const size = avatarMatrix.getSize();
        const matrix = avatarMatrix.getMatrix();
    
        let svg = `<svg viewBox="0 0 ${size} ${size}">` ;

        for (const [x, col] of matrix.entries()) {
            for (const [y, color] of col.entries()) {
                svg += `<rect x="${x}" y="${y}" width="1" height="1" fill="${color}" />`;
            }
        }

        return svg += '</svg>';
    }
};

export default SVGRenderer;