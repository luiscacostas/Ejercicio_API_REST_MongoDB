const mongoose = require('mongoose');

const Provider = require('../models/provider.model');
const Product = require('../models/products.model');

const createProvider = async (providerData) => {
    try {
      const newProvider = new Provider(providerData);
      return await newProvider.save();
    } catch (error) {
      console.error('Error al crear el proveedor:', error.message);  
      throw new Error('Error al crear el proveedor');
    }
  };
  
const getAllProviders = async () => {
    try {
      return await Provider.find();
    } catch (error) {
      throw new Error('Error al obtener los proveedores');
    }
  };
const updateProvider = async (providerData) => {
    try {
      return await Provider.findOneAndUpdate({ company_name: providerData.company_name }, providerData, { new: true });
    } catch (error) {
      throw new Error('Error al actualizar el proveedor');
    }
  };
//   {
//     "company_name": "Jugueteria Fantasia",
//     "cif": "B19002200",
//     "address": "Calle de Primera",
//     "url_web": "https://www.jugueteria.com"
// }
  
  const deleteProvider = async (companyName) => {
    try {
      const provider = await Provider.findOne({ company_name: companyName });
      if (!provider) {
        throw new Error(`Proveedor con nombre ${companyName} no encontrado`);
      }
  
      const relatedProducts = await Product.find({ provider: provider._id });
  
      if (relatedProducts.length > 0) {
        return { error: true, message: `No se puede eliminar el proveedor: ${companyName} porque tiene productos asociados` };
      }
  
      await Provider.deleteOne({ company_name: companyName });
      return { name: companyName };
    } catch (error) {
      throw new Error('Error al eliminar el proveedor');
    }
  };
//   {
//     "company_name": "Cerveceria La Nueva"
//   }

  module.exports={
    createProvider,
    getAllProviders,
    updateProvider,
    deleteProvider
  }


