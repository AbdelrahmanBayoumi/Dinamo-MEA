const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  category: { type: String },
  subCategory: { type: String },
  title: { type: String, required: true },
  details: { type: String },
  professionals: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional' },
      name: { type: String },
      avgRating: { type: Number },
      reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
      about: { type: String },
      location: {
        longitude: { type: Number },
        latitude: { type: Number }
      },
      portfolioImages: [{ type: String }]
    }
  ]
});

module.exports = mongoose.model('Service', serviceSchema);
