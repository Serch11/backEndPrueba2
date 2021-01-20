'use strict';

const mongoose = require('mongoose');
const port = 5000;

const app = require('./app');

mongoose.connect("mongodb://localhost/prueba",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("Conexion realizada con exito");
}).catch((error)=>{
    console.log(error + "erro al hacer la conexion")
})


app.listen(port,()=>{
    console.log("Servidor corriendo en localhost:" + port)
})