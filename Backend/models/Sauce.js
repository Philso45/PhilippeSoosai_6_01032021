//Import de mongoose
const mongoose = require('mongoose');
// Appel du middleware de validation des champs du model de la sauce
const sauceValidation = require('../middleware/sauceValidation');

// Création du schéma de données Sauce qui contient les champs souhaité pour chaque sauce en indiquant leur caractère obligatoire ou non
const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true, validate: sauceValidation.nameValidator },
  manufacturer: { type: String, required: true, validate: sauceValidation.manufacturerValidator },
  description: { type: String, required: true, validate: sauceValidation.descriptionValidator },
  mainPepper: { type: String, required: true, validate: sauceValidation.pepperValidator },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});


//export du schema en tant que modele mongoose appelé sauce la rendant disponible pour l'application Express
module.exports = mongoose.model('Sauce', sauceSchema);
