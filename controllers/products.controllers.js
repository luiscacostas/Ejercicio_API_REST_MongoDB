const productService = require('../services/products.services');

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    if (newProduct.error) {
      res.status(400).json({ message: newProduct.message });
    } else {
      res.status(201).json({ message: 'producto creado', product: newProduct });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(req.body);
    res.status(200).json({ message: `producto actualizado: ${updatedProduct.title}`, product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.body.title);
    res.status(200).json({ message: `Se ha borrado el producto: ${req.body.title}` });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}