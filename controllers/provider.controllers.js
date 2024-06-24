const providerService = require('../services/provider.services');

const getAllProviders = async (req, res) => {
  try {
    const providers = await providerService.getAllProviders();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los proveedores', error });
  }
};

const createProvider = async (req, res) => {
  try {
    const newProvider = await providerService.createProvider(req.body);
    res.status(201).json({ message: 'proveedor creado', provider: newProvider });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el proveedor', error });
  }
};

const updateProvider = async (req, res) => {
  try {
    const updatedProvider = await providerService.updateProvider(req.body);
    res.status(200).json({ message: `proveedor actualizado: ${updatedProvider.company_name}`, provider: updatedProvider });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el proveedor', error });
  }
};

const deleteProvider = async (req, res) => {
  try {
    const result = await providerService.deleteProvider(req.body.company_name);
    if (result.error) {
      res.status(400).json({ message: result.message });
    } else {
      res.status(200).json({ message: `Se ha borrado el proveedor: ${result.name}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el proveedor', error });
  }
};

module.exports = {
    createProvider,
    getAllProviders,
    updateProvider,
    deleteProvider
}