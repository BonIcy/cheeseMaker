let {Router} = require('express');
let {check} = require('express-validator');
let { validateDocuments } = require('../middlewares/validate.documents.js');

let Role = require('../models/Role.js')
let {getUsers,postUser,putUser,deleteUser,patchUser} = require('../controllers/usuarios.controller.js');


let router = Router();

router.get("/", getUsers);
router.post("/", [ 
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    check('password', 'La contraseña debe tener 6 caracteres').isLength({min : 6}),
    check('email', 'correo no valido').isEmail(),
    // check('rol', 'No es rol valido').isIn(['ADMIN', 'USER']),
    check('rol').custom(async(rol = '')=>{
        let rolExistente = await Role.findOne({rol});
        if(!rolExistente){
            throw new Error(`El rol ${rol} no existe en la base de datos unu`);
        }
    }),
    validateDocuments
], postUser);
router.put("/", putUser);
router.delete("/",deleteUser);
router.patch("/", patchUser);
module.exports =  router;