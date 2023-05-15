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

    price: {
      type: Number,
    },

    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
