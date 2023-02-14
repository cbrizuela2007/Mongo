const mongoose = require("mongoose");

const SchemaJokes = mongoose.Schema({
    setup:String,
    punchline:String
})

const Jokes = mongoose.model("Chistes", SchemaJokes)

module.exports = Jokes;