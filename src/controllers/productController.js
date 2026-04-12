const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../models/productModel');

const create = async (req, res) => {
    const product = await createProduct(req.body);
    res.status(201).json(product);
};

const getAll = async (req, res) => {
    const products = await getAllProducts();
    res.json(products);
};

const getById = async (req, res) => {
    const product = await getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
};

const update = async (req, res) => {
    const product = await updateProduct(req.params.id, req.body);
    res.json(product);
};

const remove = async (req, res) => {
    await deleteProduct(req.params.id);
    res.status(204).send();
};

module.exports = { create, getAll, getById, update, remove };