const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);
const Home = mongoose.model("Home", homeSchema);
module.exports = Home;
