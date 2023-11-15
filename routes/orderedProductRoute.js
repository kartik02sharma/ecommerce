const router = require('express').Router();
const finalOrderController = require('../controller/finalOrderController');

router.post('/finalorder', finalOrderController.FinalOrder);
router.get('/list_of_orderedproduct', finalOrderController.ShowPlacedOrder);

module.exports = router;