var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/carrito", function(req, res){
    res.sendFile(__dirname + "/index.html#carrito")
});

app.get("/pago", async function(req, res){
    await res.send("./pago/pago.html")
})

app.get("/productos", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.get("/producto1", function(req, res){
    res.sendFile(__dirname + "/informacion_productos/producto1.html")
});

app.get("/producto2", function(req, res){
    res.sendFile(__dirname + "/informacion_productos/producto2.html")
});

app.get("/producto3", function(req, res){
    res.sendFile(__dirname + "/informacion_productos/producto3.html")
});

app.get("/producto4", function(req, res){
    res.sendFile(__dirname + "/informacion_productos/producto4.html")
});

app.get("/producto5", function(req, res){
    res.sendFile(__dirname + "/informacion_productos/producto5.html")
});

app.get("/producto6", function(req, res){
    res.sendFile(__dirname + "/informacion_productos/producto6.html")
});

app.get("/producto7", function(req, res){
    res.sendFile(__dirname + "/informacion_productos/producto7.html")
});

app.get("/producto8", function(req, res){
    res.sendFile(__dirname + "/informacion_productos/producto8.html")
});

app.get("/producto9", function(req, res){
    res.sendFile(__dirname + "/informacion_productos/producto9.html")
});

app.listen(3000, function(){
    console.log("Servidor iniciado en el puerto 3000");
});