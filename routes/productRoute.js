const router = require('express').Router();
const allProductsController = require('../controller/allProductsController');
const CartController = require('../controller/cartController');

// routes
router.get('/products', allProductsController.showAllProducts);
router.get('/cartitems', CartController.showCart);
router.post('/addtocart', CartController.addToCart);
router.post('/deleteitem', CartController.deleteFromCart);

module.exports = router;
