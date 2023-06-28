export default class ImageConverter {
    constructor() {

    }

    static async svg2png(svg) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            // Création d'une image d'arrière-plan pour le canvas
            const image = new Image();
    
            image.onload = function() {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
                resolve(canvas.toDataURL('image/png'));
            };
            
            image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
        })
    }
}