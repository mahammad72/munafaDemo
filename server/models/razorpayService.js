const Razorpay = require('razorpay');
const jsQR = require('jsqr');
const QrCode = require('qrcode-reader');
const fs = require('fs');
const Jimp = require('jimp');

class RazorpayService {
  constructor() {
    this.razorpay = new Razorpay({
      key_id:'rzp_test_dWgB9IQIg11WL5',
      key_secret:'RYMPvbPR0RnviXUJfbhG0TUc'
    });
  }

  async getPaymentHistory() {
    try {
        const payments = await this.razorpay.payments.all();
        console.log("payment data ", payments);
        return payments.items;
    } catch (error) {
        console.log("errror ", error);
      throw error;
    }
  }

  async scanQRPayment(qrData) {
    try {
        const paymentInfo = this.decodeQRCode(qrData); // Implement this function to decode QR code data
        
        // Step 2: Validate the extracted payment information.
        if (!paymentInfo || !isValidPaymentInfo(paymentInfo)) {
            throw new Error('Invalid payment information');
        }
        
        // Step 3: Create a payment request or process the payment using Razorpay API.
        const paymentResult = await this.razorpay.payments.create({
            amount: paymentInfo.amount,
            currency: paymentInfo.currency,
            receipt: paymentInfo.receipt,
            payment_capture: 1
        });
        
        // Step 4: Handle the response from the Razorpay API.
        if (paymentResult && paymentResult.status === 'captured') {
            return { success: true, message: 'Payment successful' };
        } else {
            throw new Error('Payment failed');
        }
    } catch (error) {
      throw error;
    }
  }

  async decodeQRCode(qrData) {
    try {
      // Convert the QR code data to an image
      const img = await Jimp.read(Buffer.from(qrData, 'base64'));

      // Decode QR code from the image
      const qr = new QrCode();
      const qrData = await new Promise((resolve, reject) => {
        qr.callback = (err, value) => err != null ? reject(err) : resolve(value);
        qr.decode(img.bitmap);
      });

      // Return the decoded QR code data
      return qrData;
    } catch (error) {
      throw new Error('Failed to decode QR code: ' + error.message);
    }
  }

  isValidPaymentInfo(paymentInfo) {
    // Implement your validation logic here
    // For example, check if paymentInfo has required fields like amount, currency, etc.
    return paymentInfo && paymentInfo.amount && paymentInfo.currency && paymentInfo.receipt;
  }

  async initiateOrderUpiPayment(upiData) {
    console.log("upiData  ", upiData);
    try {
      const paymentOptions = {
        amount: upiData.amount, // Amount in paise
        currency: upiData.currency || 'INR', // Default currency is INR
        receipt: upiData.receipt,
        payment_capture: 1, // Auto capture
        notes: upiData.notes // Additional notes if needed
      };

      const payment = await this.razorpay.orders.create(paymentOptions);
      return payment;
    } catch (error) {
      throw error;
    }
  }
  async initiateUpiPayment(orderupiData) {
    console.log("orderupiData  ", orderupiData);
    try {
      const paymentOptions = {
        amount: orderupiData.amount, // Amount in paise
        currency: 'INR',
        payment_capture: 1, // Auto capture
        order_id: orderupiData.orderId,
        notes: orderupiData.notes
      };

      const payment = await this.razorpay.payment.create(paymentOptions);
      return payment;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = RazorpayService;