const mongoose = require('mongoose');
const Product = require('../models/products.model');
const Provider = require('../models/provider.model')

const createProduct = async (productData) => {
    try {
      const provider = await Provider.findOne({ company_name: productData.providerName });
      if (!provider) {
        return { error: true, message: 'Proveedor no encontrado' };
      }
  
      const newProduct = new Product({ 
        title: productData.title,
        price: productData.price,
        description: productData.description,
        provider: provider._id 
      });
  
      return await newProduct.save();
    } catch (error) {
      throw new Error('Error al crear el producto');
    }
  };

const getAllProducts = async () => {
  try {
    return await Product.find().populate('provider');
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
};

const updateProduct = async (productData) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate({ title: productData.title }, productData, { new: true });
    if (!updatedProduct) {
      throw new Error(`Producto con título ${productData.title} no encontrado`);
    }
    return updatedProduct;
  } catch (error) {
    throw new Error('Error al actualizar el producto');
  }
};

const deleteProduct = async (productTitle) => {
  try {
    const result = await Product.deleteOne({ title: productTitle });
    if (result.deletedCount === 0) {
      throw new Error(`Producto con título ${productTitle} no encontrado`);
    }
  } catch (error) {
    throw new Error('Error al eliminar el producto');
  }
};

module.exports={
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}

//createProduct('Tomate',50, 'hola', 'The Bridge').then(data=>console.log(data))