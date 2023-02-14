const Jokes = require("../models/jokes.model")

const catchError = (error, response) => response.json({message: "Something went wrong", error});

const obtenerChistes = (req,res) =>{
    
    Jokes.find()
    .then(resultado => {res.json(resultado)})
    .catch(error=> res.json(error))
}

const obtenerChiste = (req,res) =>{
    const id = req.params._id
    Jokes.findById(id).exec()
    .then(resultado => {res.json(resultado)
    })
    .catch(error=> res.json(error))
}

const obtenerChisteRandom = (req,res) =>{
    
    Jokes.count()
    .then(count => (
      Jokes.findOne().skip(Math.floor(Math.random() * count))
        .then(joke => res.json({joke}))
        .catch(error => catchError(error, res))
    ))
    .catch(error => catchError(error, res));
}

const crearChiste = (req,res) =>{
    Jokes.create(req.body)
    .then(resultado => {res.json(resultado)})
    .catch(error=> res.json(error))
}

const actualizarChiste = (req,res) =>{
    const id = req.params._id
    console.log(req.body)
    Jokes.updateOne({_id: id}, req.body)
    .then(resultado => res.json(resultado))
    .catch(error=> res.json(error))
}

const eliminarChiste = (req,res) =>{
    Jokes.deleteOne({_id: req.params._id})
    .then(resultado => res.json(resultado))
    .catch(error=> res.json(error))
}

module.exports = {obtenerChistes, obtenerChiste, obtenerChisteRandom, crearChiste, actualizarChiste, eliminarChiste} 


