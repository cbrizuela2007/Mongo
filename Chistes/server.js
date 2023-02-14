const express = require("express");
const app = express();
const port=8000;

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//base de datos
require("./config/mongoose.config")


//enrutamiento
const RutaUsuarios = require("./routes/jokes.route")
RutaUsuarios(app);

//levantar servidor node
app.listen(port, ()=> console.log("servidor corriendo"))


