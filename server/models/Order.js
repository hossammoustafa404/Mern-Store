const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    shippingInfo: {
      type: Object,
      fullName: {
        type: String,
      },

      address: {
        type: String,
      },
      city: {
        type: String,
      },

      postalCode: {
        type: String,
      },

      country: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", OrderSchema);
