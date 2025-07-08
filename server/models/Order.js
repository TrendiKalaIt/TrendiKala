// models/Order.js
const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Added required
  productName: { type: String, required: true }, // Added required
  quantity: { type: Number, required: true, min: 1 }, // Added required, min
  discountPrice: { type: Number, required: true }, // Added required
  image: { type: String },
  color: { type: String },
  size: { type: String }
}, { _id: false });

const shippingInfoSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  streetAddress: { type: String, required: true },
  apartment: { type: String },
  townCity: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  emailAddress: { type: String, required: true }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  shippingInfo: shippingInfoSchema,
  paymentMethod: { type: String, enum: ['bank', 'cashOnDelivery'], default: 'cashOnDelivery', required: true }, // Added required
  // shippingOption: { type: String, enum: ['free', 'express', 'pickup'], default: 'free' }, // This field might become redundant if you only have a fixed delivery charge. You can remove it or repurpose it.
  
  // --- ADDED/MODIFIED FIELDS ---
  shippingCost: { // New field to store the calculated delivery charge
    type: Number,
    required: true, // It's always calculated, so make it required
    default: 0 // A default value if not provided, though it should be
  },
  totalAmount: { // Ensure this is a Number and required
    type: Number,
    required: true,
  },
  // --- END ADDED/MODIFIED FIELDS ---

  status: { type: String, default: 'Processing' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);