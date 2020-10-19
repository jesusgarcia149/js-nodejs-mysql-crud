const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer');

router.get('/', customerController.read);
router.post('/create', customerController.create);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

module.exports = router;