const ControladorJokes = require("../controllers/jokes.controller")

module.exports = (app) => {
    app.get("/api/jokes", ControladorJokes.obtenerChistes)
    
    app.get("/api/jokes/random", ControladorJokes.obtenerChisteRandom)

    app.get("/api/jokes/:_id", ControladorJokes.obtenerChiste)

    app.post("/api/jokes/new", ControladorJokes.crearChiste)

    app.put("/api/jokes/update/:_id", ControladorJokes.actualizarChiste)

    app.delete("/api/jokes/delete/:_id", ControladorJokes.eliminarChiste)
}
