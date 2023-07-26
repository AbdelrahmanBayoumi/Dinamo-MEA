const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  amount: { type: Number },
  size: { type: String },
  notes: { type: String },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' }
});

const orderSchema = new mongoose.Schema({
  orderItems: [orderItemSchema],
  promoCode: { type: String },
  totalPrice: { type: Number },
  countOfDrivers: { type: Number },
  address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' }
});

module.exports = mongoose.model('Order', orderSchema);
