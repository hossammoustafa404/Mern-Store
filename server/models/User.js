require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "The first name is required."],
      trim: true,
      max: 15,
    },

    lastName: {
      type: String,
      required: [true, "The last name is required."],
      trim: true,
      max: 15,
    },

    email: {
      type: String,
      required: [true, "The email is required."],
      trim: true,
      // match: ""
      unique: true,
    },

    username: {
      type: String,
      required: [true, "The username is required."],
      trim: true,
      // match: ""
      unique: true,
    },

    password: {
      type: String,
      required: [true, "The password is required."],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Encrypt the password
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(this.password, salt);
  this.password = hashedPass;
});

// Create Token
UserSchema.methods.createToken = function () {
  const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET);
  return token;
};

// Compare password
UserSchema.methods.comparePassword = async function (targetPass) {
  const matched = await bcrypt.compare(targetPass, this.password);
  return matched;
};

module.exports = mongoose.model("User", UserSchema);
