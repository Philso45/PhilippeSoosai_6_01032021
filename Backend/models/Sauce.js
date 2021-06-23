//Import de mongoose
const mongoose = require('mongoose');

// Création du schéma de données Sauce qui contient les champs souhaité pour chaque sauce en indiquant leur caractère obligatoire ou non
const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});


//export du schema en tant que modele mongoose appelé sauce la rendant disponible pour l'application Express
module.exports = mongoose.model('Sauce', sauceSchema);
