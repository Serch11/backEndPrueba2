'use stric';

const multipartys = require('connect-multiparty');
const multipartysMiddleware = multipartys({uploadDir:'./uploads'});
const express = require('express');
const router = express.Router();
const controllerEstantes = require('../controllers/controllerEstantes');




    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE ,PATCH ');
        next();
})

router.get("/",(req,res)=>{
    res.status(200).send({message:'Welcome router backend'});
})
router.get("/home",controllerEstantes.home);
router.post("/saveEstantes",controllerEstantes.saveEstante);
router.get("/getEstantes",controllerEstantes.getEstandes);
router.get("/getOneEstante/:id?",controllerEstantes.getOnestante);
router.delete("/deleteEstate/:id",controllerEstantes.deleteEstante);


module.exports = router;