const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);
const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
module.exports = Service;
