const express = require('express');
const router = express.Router();

const {
    create,
    getAll,
    getById,
    update,
    remove
} = require('../controllers/productController');

const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/authorize');

// READ (USER + ADMIN)
router.get('/', authenticate, authorize(['USER', 'ADMIN']), getAll);
router.get('/:id', authenticate, authorize(['USER', 'ADMIN']), getById);

// WRITE (ADMIN only)
router.post('/', authenticate, authorize(['ADMIN']), create);
router.put('/:id', authenticate, authorize(['ADMIN']), update);
router.delete('/:id', authenticate, authorize(['ADMIN']), remove);

module.exports = router;