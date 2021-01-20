'use strict';

const bodyParse = require('body-parser');
const express = require('express');
const app= express();

const router = require('./router/router');


app.use(bodyParse.json({limit:'50mb'}));
app.use(bodyParse.urlencoded({extended:true}));

app.use("/",router);


module.exports = app;
