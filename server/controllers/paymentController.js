const RazorpayService = require('../models/razorpayService');

const razorpayService = new RazorpayService();

exports.getPaymentHistory = async (req, res) => {
  try {
    const paymentHistory = await razorpayService.getPaymentHistory();
    res.json({status:200, data:paymentHistory});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.scanQRPayment = async (req, res) => {
    try {
      const qrData = req.body.qrData; // Assuming QR code data is sent in the request body
      const paymentResult = await razorpayService.scanQRPayment(qrData);
      res.json(paymentResult);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.initiateUpiPayment = async (req, res) => {
    // console.log("req ",req );
    try {
        console.log("req ",req);
      const upiData = req.body; // Assuming UPI data is sent in the request body
      const paymentResult = await razorpayService.initiateOrderUpiPayment(upiData);
    //   let newUPIData = {
    //     amount: upiData.amount, // Amount in paise
    //     currency: 'INR',
    //     payment_capture: 1, // Auto capture
    //     order_id: paymentResult.id,
    //     notes: upiData.notes
    //   }
    //   const payment_Result = await razorpayService.initiateUpiPayment(newUPIData);
      res.json(paymentResult);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };