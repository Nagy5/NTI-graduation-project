const ContactData = require("../models/Contact");
const { isValidObjectId } = require("mongoose");

exports.addData = async (req, res) => {
  try {
    const data = req.body;
    const contactData = await ContactData.create(data);
    res.status(201).json(contactData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateData = async (req, res) => {
  try {
    const ID = req.params.id;

    if (!isValidObjectId(ID)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const update = req.body;

    const contact = await ContactData.findOneAndUpdate({ _id: ID }, update, {
      new: true,
    });

    if (!contact) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getData = async (req, res) => {
  try {
    const contact = await ContactData.find();
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
