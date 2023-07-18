let Usuario = require('../models/Usuario.js');
let bcryptjs = require('bcryptjs');

let getUsers = (req,res)=>{
    res.json({
        "message":"home page"
    }); 
}

let postUser = async (req,res)=>{

  
    let {nombre, email, password, rol} = req.body;
    let usuario = new Usuario({nombre, email, password, rol});

    let emailExistente = await Usuario.findOne({email});
    if (emailExistente){
        return res.status(400).json({
            msg:"El email ya esta registrado jajqjkwjkwnw :p"
        })
    }

    let salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    
    await usuario.save();
    res.json({
        "message":"post api",
        usuario,
    }); 
}

let putUser = (req,res)=>{
    res.json({
        "message":"put api",
        
    }); 
}

let deleteUser = (req,res)=>{
    res.json({
        "message":"delete api"
    }); 
}
let patchUser = (req,res)=>{
    res.json({
        "message":"patch api"
    }); 
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    patchUser
}