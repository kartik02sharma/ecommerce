const router = require('express').Router();
const finalOrderController = require('../controller/finalOrderController');

router.post('/finalorder', finalOrderController.FinalOrder);
router.get('/orderhistory', finalOrderController.OrderHistory);

module.exports = router;