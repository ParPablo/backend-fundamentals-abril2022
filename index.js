const express = require("express")

const app = express()

app.get("/",function(peticion,respuesta){
    respuesta.send("Hola mundo")
})

// Investigar acerca de HTTP


app.listen(4000,()=>{
    console.log("Escuchando: http://localhost:4000")
})