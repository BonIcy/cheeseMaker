let {Schema, model} = require('mongoose')

let RoleSchema = Schema({
    rol:{
        type:String,
        required:[true, 'El rol es obligatorio papu']
    }
});

module.exports = model('Role', RoleSchema)