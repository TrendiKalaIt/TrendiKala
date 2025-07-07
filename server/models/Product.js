// const mongoose = require('mongoose');

// const mediaSchema = new mongoose.Schema({
//   type: { type: String, enum: ['image', 'video'], required: true },
//   url: { type: String, required: true },
// }, { _id: false });

// const productSchema = new mongoose.Schema({
//   productName: { type: String, required: true },
//   category: String,
//   brand: String,
//   media: [mediaSchema], // supports both images/videos
//   thumbnail: String,
//   price: Number,
//   discountPrice: Number,
//   discountPercent: Number,
//   description: String,
//   detailedDescription: {
//     paragraph1: String,
//     paragraph2: String,
//   },
//   colors: [{
//     name: String,
//     hex: String,
//   }],
//   sizes: [String],
//   details: {
//     fabric: String,
//     fitType: String,
//     length: String,
//     sleeveNeckType: String,
//     patternPrint: String,
//     occasionType: String,
//     washCare: String,
//     countryOfOrigin: String,
//     deliveryReturns: String,
//   },
//   materialWashing: [{
//     label: String,
//     value: String,
//   }],
//   sizeShape: [{
//     label: String,
//     value: String,
//   }],
// }, { timestamps: true });

// module.exports = mongoose.model('Product', productSchema);


const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  type: { type: String, enum: ['image', 'video'], required: true },
  url: { type: String, required: true },
}, { _id: false });

//  NEW: Review schema
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  category: String,
  brand: String,
  media: [mediaSchema],
  thumbnail: String,
  price: Number,
  discountPrice: Number,
  discountPercent: Number,
  description: String,
  detailedDescription: {
    paragraph1: String,
    paragraph2: String,
  },
  colors: [{
    name: String,
    hex: String,
  }],
  sizes: [String],
  details: {
    fabric: String,
    fitType: String,
    length: String,
    sleeveNeckType: String,
    patternPrint: String,
    occasionType: String,
    washCare: String,
    countryOfOrigin: String,
    deliveryReturns: String,
  },
  materialWashing: [{
    label: String,
    value: String,
  }],
  sizeShape: [{
    label: String,
    value: String,
  }],

  //  NEW: Embedded reviews
  reviews: [reviewSchema],
  numReviews: { type: Number, default: 0 },
  rating: { type: Number, default: 0 }

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
