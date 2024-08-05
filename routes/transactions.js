const express = require('express');
const router = express.Router();
const transactionsController = require ('../controllers/transactionsController');

router.get('/',transactionsController.getAllTransactions);

router.post('/',transactionsController.addTransaction);

module.exports = router;
