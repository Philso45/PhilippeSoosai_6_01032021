// Utilisation de multer pour enregistrer les fichiers images
const multer = require('multer');

// Modification de l'extension des fichiers
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    // Enregistrement dans le dossier "images"
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    // Génération du nom du fichier : nom d'origine + numero unique + . + extension
    filename: (req, file, callback) => {
        const extension = MIME_TYPES[file.mimetype];
//Permet de ne pas télécharger d'autres fichier que des images avec les extension cités au dessus
        if(undefined == extension ) {
            throw new Exception("invalid file");
        }

        const name = file.originalname.split(' ').join('_');

        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage }).single('image');