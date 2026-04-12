const { pool } = require('../config/db');

const createCategory = async (name, description) => {
    const result = await pool.query(
        'INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *',
        [name, description]
    );
    return result.rows[0];
};

const getAllCategories = async () => {
    const result = await pool.query('SELECT * FROM categories ORDER BY id');
    return result.rows;
};

module.exports = { createCategory, getAllCategories };