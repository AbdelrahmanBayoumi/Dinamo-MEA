const mongoose = require('mongoose');

const serviceOrderSchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  date: { type: Date },
  availableTimeRange: { type: String },
  professionalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional' },
  clientLocation: {
    longitude: { type: Number },
    latitude: { type: Number }
  }
});

module.exports = mongoose.model('ServiceOrder', serviceOrderSchema);
