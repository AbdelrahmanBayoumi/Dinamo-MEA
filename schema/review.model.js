const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  reviewText: { type: String },
  rating: { type: Number, enum: [1, 2, 3, 4, 5] },
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
