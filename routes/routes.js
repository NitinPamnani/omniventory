const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/productController');
const SupplierController = require('../controllers/supplierController');
const PurchaseController = require('../controllers/purchaseController');
const OrderController = require('../controllers/OrderController');

router.get('/products', ProductController.findAll);
router.get('/suppliers', SupplierController.findAll);

router.post('/makePurchase', PurchaseController.makePurchase);
router.post('/placeOrder', OrderController.placeOrder);

router.post('/');

module.exports = router;