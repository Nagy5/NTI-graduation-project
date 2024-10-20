const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contacts", contactSchema);
module.exports = Contact;
