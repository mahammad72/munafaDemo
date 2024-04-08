const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.get('/history', paymentController.getPaymentHistory);
router.post('/scan-qr', paymentController.scanQRPayment);
router.post('/upi-payment', paymentController.initiateUpiPayment);
module.exports = router;