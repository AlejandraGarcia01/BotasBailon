const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Ingresar = new Schema({

    Tipo_Producto: String, 
    Nombre_Producto: String,
    Descripcion_Producto: String,
    Nombre_Proveedor: String,
    Cantidad_Prodcuto: Int32Array,
    Talla_Producto: String

}); 
module.exports = mongoose.model('Productos', Ingresar);