//Luego de instalar express requerimos los modulos

const express = require("express")
const app = express()
//Requerimos path para utilizar rutas absolutas
const path = require("path")

//guardamos puerto en una variable
const PORT = 3030;
//Indicamos ruta de archivos estaticos
app.use(express.static(path.join(__dirname,"public")))

//Levantamos el servidor con el metodo listen
app.listen(PORT, function(){
    console.log(`Servidor levantado en el puerto ${PORT}`)
})

//Creo una funcion para unir la ruta absoluta y la del archivo html solicitado
let rutaHtml = rutaSolicitada => path.join(__dirname, rutaSolicitada)

//Y creamos los metodos para responder con lo requerido
app.get("/", function(req, res){
    res.sendFile(rutaHtml("./views/index.html"))
})
app.get("/index.html", function(req, res){
    res.sendFile(rutaHtml("./views/index.html"))
})

app.get("/babbage", function(req, res){
    res.sendFile(rutaHtml("./views/babbage.html"))
})

app.get("/babbage.html", function(req, res){
    res.sendFile(rutaHtml("./views/babbage.html"))
})

app.get("/berners-lee", function(req, res){
    res.sendFile(rutaHtml("./views/berners-lee.html"))
})

app.get("/berners-lee.html", function(req, res){
    res.sendFile(rutaHtml("./views/berners-lee.html"))
})

app.get("/clarke", function(req, res){
    res.sendFile(rutaHtml("./views/clarke.html"))
})

app.get("/clarke.html", function(req, res){
    res.sendFile(rutaHtml("./views/clarke.html"))
})

app.get("/hamilton", function(req, res){
    res.sendFile(rutaHtml("./views/hamilton.html"))
})

app.get("/hamilton.html", function(req, res){
    res.sendFile(rutaHtml("./views/hamilton.html"))
})

app.get("/hopper", function(req, res){
    res.sendFile(rutaHtml("./views/hopper.html"))
})

app.get("/hopper.html", function(req, res){
    res.sendFile(rutaHtml("./views/hopper.html"))
})

app.get("/lovelace", function(req, res){
    res.sendFile(rutaHtml("./views/lovelace.html"))
})

app.get("/lovelace.html", function(req, res){
    res.sendFile(rutaHtml("./views/lovelace.html"))
})


app.get("/turing", function(req, res){
    res.sendFile(rutaHtml("./views/turing.html"))
})

app.get("/turing.html", function(req, res){
    res.sendFile(rutaHtml("./views/turing.html"))
})