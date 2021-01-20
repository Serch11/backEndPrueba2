'use strict';

const mongoose = require('mongoose');

const modelEstantes = require('../models/modelEstante');

const controllerEstantes = {

    home:(req,res)=>{
        res.status(200).send({message:'Welcome to controller estantes'});
    },

    saveEstante:(req,res)=>{
        console.log(req.body);

        let estante = new modelEstantes();
        estante.codigo = req.body.codigo;
        estante.descripcion = req.body.descripcion;
        estante.filas = req.body.filas;
        estante.columnas = req.body.columnas;

        estante.save((err,docs)=>{

            if(err) return res.status(500).send({message:"Error al conectar con el servidor"});
            if(!docs) return res.status(404).send({message:"Erro al insertar los daots"});
            return res.status(200).send({Estantes:docs});
        })
    },
    getEstandes:(req,res)=>{

        modelEstantes.find({},(error,docs)=>{
            if(error) return res.status(500).send({message:"Error al conectar con el servidor"});
            if(!docs) return res.status(404).send({message:"Erro al insertar los daots"});
            return res.status(200).send({Estantes:docs});
        })
    },

    getOnestante :(req,res)=>{
        console.log(req.body)
        let id = req.params.id;
        console.log(id);
        modelEstantes.findById(id,(error,docs)=>{
            if(error) return res.status(500).send({message:"Error al conectar con el servidor"});
            if(!docs) return res.status(404).send({message:"error al consultar los datos"});
            return res.status(200).send({Estante:docs});
        })
    }
}



module.exports = controllerEstantes;
