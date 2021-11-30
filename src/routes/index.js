const express = require ('express');
const router = express.Router();
const model = require('../models/Productos')();

const Ingresar = require('../models/Productos'); //Constante  que trae el recusro de Productos 


//Enviar los valores en base al modelo creado
router.get('/', async (req,res) => {
    const Productos=  await Ingresar.find(); //se envian los valores FIND = Para traer los valores de la base de datos en Mongo
    console.log(Productos); //Se imprimen en consola los valores guardados en la base de datos  
    res.render('index.ejs', {
        Productos
    }); //Se carga la pagina de index 
});

//Creacion de nueva ruta para agregar registros desde formulario
router.post('/add', async (req,res) => {
    const Producto =  new Ingresar(req.body); //se envian los valores FIND = Para traer los valores de la base de datos en Mongo
    await Producto.save(); //Se gurdan los valores que se van a mandar 
    res.redirect('/');  
});




module.exports = router;




   //res.render('index.ejs', {