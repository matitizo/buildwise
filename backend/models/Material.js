const mongoose = require("mongoose");

const MaterialSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },

      stock: {
        type: Number,
        required: true,
      },

      category: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        default: "🧱",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Material",
    MaterialSchema
  );