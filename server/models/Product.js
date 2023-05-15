const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    company: {
      type: String,
    },

    img: {
      type: String,
    },

    description: {
      type: String,
    },

    rating: {
      type: Number,
    },

    numReviews: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
