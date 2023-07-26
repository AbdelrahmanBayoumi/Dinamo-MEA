const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  birthday: { type: Date },
  wallet: { type: Number, default: 0 },
  phoneNo: { type: String, required: true },
  password: { type: String, required: true },
  provider: {
    type: String,
    enum: ["local", "facebook", "google"],
    default: "local",
  },
  addresses: [
    {
      title: { type: String, required: true },
      state: { type: String },
      location: {
        longitude: { type: Number },
        latitude: { type: Number },
      },
      additionalData: { type: String },
      phoneNo: { type: String },
      isDefault: { type: Boolean, default: false },
    },
  ],
  location: {
    longitude: { type: Number },
    latitude: { type: Number },
  },
  favoriteVendors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vendor" }],
  favoriteProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  notificationPrefs: [
    {
      key: { type: String },
      value: { type: Boolean },
    },
  ],
  cart: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      amount: { type: Number },
      size: { type: String },
      notes: { type: String },
      vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
