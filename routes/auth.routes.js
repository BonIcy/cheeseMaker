let {Router} = require('express');
let {check} = require('express-validator');
const { login } = require('../controllers/auth.controllers.js');
const { validateDocuments } = require('../middlewares/validate.documents.js');

let router = Router();

router.post("/login", [
    check('email', 'El email es requerido').isEmail(),
    check('password','La contraseña es requerida').not().isEmpty(),
    validateDocuments
], login)

module.exports = router