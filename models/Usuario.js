let {Schema, model} = require('mongoose');

let UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'Name is required']
    },

    email:{
        type: String,
        required: [true, 'Email is required'],
        unique:true
    },

    password:{
        type: String,
        required: [true, 'Password id required']
    },

    imagen:{
        type: String,        
    },

    rol:{
        type: String,
        required:true,
        default: 'USER',
        // enum: ['ADMIN','USER']        
    },

    estado:{
        type: Boolean,
        default: true
    },
    googleSingIn :{
        type: Boolean,
        default: true
    }

})

module.exports = model('Usuario',UsuarioSchema);