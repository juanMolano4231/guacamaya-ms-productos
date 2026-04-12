const { createCategory, getAllCategories } = require('../models/categoryModel');

const create = async (req, res) => {
    const { name, description } = req.body;
    const category = await createCategory(name, description);
    res.status(201).json(category);
};

const getAll = async (req, res) => {
    const categories = await getAllCategories();
    res.json(categories);
};

module.exports = { create, getAll };