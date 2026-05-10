const mongoose = require("mongoose");

const LandSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Iragurishwa",
    },
    image: {
      type: String,
      default: "🌄",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Land", LandSchema);