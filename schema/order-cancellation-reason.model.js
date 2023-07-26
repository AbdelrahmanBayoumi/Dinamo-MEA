const mongoose = require('mongoose');

const orderCancellationReasonSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  reasonText: { type: String }
});

module.exports = mongoose.model('OrderCancellationReason', orderCancellationReasonSchema);
