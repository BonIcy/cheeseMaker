let {response} = require('express');
let Usuario = require('../models/Usuario.js');
let bcryptjs = require('bcryptjs');

    let login = async (req,res=response)=>{
        let {email, password} = req.body;
        try {
            //verificar email
            let usuario = await Usuario.findOne({email});
            if(!usuario){
                return res.status(400).json({
                    msg:"Usuario Incorrecto"
                })
            }
        
            //verificar contra
            let validatePassword = bcryptjs.compareSync(password, usuario.password)
            if(validatePassword){
                return res.status(400).json({ msg: "Contraseña correcta"});
            }
            if(!validatePassword){
                return res.status(400).json({ msg: "Contraseña incorrecta"});
            }

            //verificar estado activa o inactivo
                 if(!usuario.estado ){
                     return res.status(400).json({
                         msg:"Esta Inactivo"
                     });
                 }
                 if(usuario.estado){
                      return res.status(400).json({
                         msg:"Esta activo"
                     });
                 }

            // let hashFromDatabase = usuario.password;
            // let passwordFromUser = req.body.password;
            // bcryptjs.compare(passwordFromUser, hashFromDatabase, (err, isMatch) => {
            // if (err) {
            //     return res.status(500).json({ msg: "Error al comparar contraseñas" });
            // }
            // if (!isMatch) {
            //     return res.status(400).json({ msg: "Contraseña incorrecta" });
            // }
            // });

        } catch (error) {
            console.log(error);
            return res.json({
                msg:"XD"
            })
        }
   
}
module.exports = {
    login
}