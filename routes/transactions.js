const express = require('express');
const router = express.Router();
const transactionsController = require ('../controllers/transactionsController');

router.get('/',transactionsController.getAllTransactions);

router.post('/',transactionsController.addTransaction);

router.put('/:id',transactionsController.updateTransactionsPut);

// router.patch('/:name', transactionsController.updateTransactionPatch); 

module.exports = router;
