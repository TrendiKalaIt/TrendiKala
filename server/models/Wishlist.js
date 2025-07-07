const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
        unique: true // Ensures one wishlist per user
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product' // Reference to your Product model
            },
            addedAt: {
                type: Date,
                default: Date.now
            },
        }
    ],
}, { timestamps: true }); 

module.exports = mongoose.model('Wishlist', wishlistSchema);