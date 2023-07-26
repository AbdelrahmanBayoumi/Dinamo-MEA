const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: { type: String },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  description: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
