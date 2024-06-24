const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true 
    },
    cif:{
        type: String,
        required: true,
        unique: true
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
        required:true
    }
};

const providerSchema = mongoose.Schema(objectSchema);

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;

// {
//     "company_name": "Cerveceria La Nueva",
//     "cif": "B20023442",
//     "address": "Calle de Prim 18",
//     "url_web": "https://www.cerveceria.com"
// }