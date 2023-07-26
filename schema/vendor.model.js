const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String },
  avgRating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  state: { type: String, enum: ["open", "close"], default: "open" },
  location: {
    longitude: { type: Number },
    latitude: { type: Number },
  },
  workHours: [
    {
      day: { type: String },
      startHour: { type: String },
      closeHour: { type: String },
    },
  ],
  type: { type: String, enum: ["Restaurant", "Supplier", "Pharmacy"] },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("Vendor", vendorSchema);
