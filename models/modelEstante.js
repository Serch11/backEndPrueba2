'use strict';

const moongose = require('mongoose');
const schema = moongose.Schema;



const ModelEstantes = schema({

    codigo:String,
    descripcion:String,
    filas:Number,
    columnas:Number,

})


module.exports = moongose.model('Estantes',ModelEstantes);



