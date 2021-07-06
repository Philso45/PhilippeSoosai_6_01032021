const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

const verifyPassword = require('../middleware/verifyPassword');

// Routes
//Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateur à la base dedonnées
router.post('/signup', verifyPassword, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;