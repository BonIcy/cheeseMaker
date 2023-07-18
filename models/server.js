let express = require('express'); 
let cors = require('cors');
let {dbConnection} = require('../database/config.js')

class Server {

    constructor(){
        this.app = express();
        
        this.port = process.env.PORT
        this.usuariosPath = "/api/usuarios";
        //Conectar a base de datos MONGODB
        this.connectDB();
        //Middlewares
        this.middlewares();
        //Routing
        this.routes();
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        //cors
        this.app.use(cors());
        //Leer y parsear json en body
        this.app.use(express.json());
        //PUBLIC DIRECTORY
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER CORRIENDOSE EN EL PUERTO ${this.port}`);
        });
    }

}

module.exports = Server