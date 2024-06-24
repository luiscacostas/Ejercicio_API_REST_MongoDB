const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    title: { 
        type: String, 
        required: true,
        unique: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    }
};

const productSchema = mongoose.Schema(objectSchema);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// {"title":"Ron Cacique",
//     "price":20,
//     "description":"El mejor Ron del Mundo",
//     "providerName":"Cacique"
// }