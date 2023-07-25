let mongoose = require("mongoose");

let dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Base de datos iniciada`);
    } catch (error) {
        console.log(error);
        throw new Error('Base de datos no iniciada >:(');
    }
}

module.exports = {
    dbConnection
}