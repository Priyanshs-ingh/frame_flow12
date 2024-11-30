const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    image: String,
    badges: [String],
    title: String,
    rating: String,
    reviews: String,
    duration: String,
    author: String,
    description: String,
    price: String,
    standard: {
        price: String,
        description: String,
        features: [String],
        delivery: String
    },
    strengths: String
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

