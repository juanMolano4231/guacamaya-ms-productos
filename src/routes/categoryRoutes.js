const express = require('express');
const router = express.Router();

const { create, getAll } = require('../controllers/categoryController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/authorize');

// READ (USER + ADMIN)
router.get('/', authenticate, authorize(['USER', 'ADMIN']), getAll);

// WRITE (ADMIN only)
router.post('/', authenticate, authorize(['ADMIN']), create);

module.exports = router;