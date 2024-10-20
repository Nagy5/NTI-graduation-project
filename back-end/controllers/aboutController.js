const AboutData = require("../models/AboutData");
const { isValidObjectId } = require("mongoose");

exports.addAboutData = async (req, res) => {
  try {
    const data = req.body;
    const aboutData = await AboutData.create(data);
    res.status(201).json(aboutData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateAboutData = async (req, res) => {
  try {
    const ID = req.params.id;

    if (!isValidObjectId(ID)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const update = req.body;

    const about = await AboutData.findOneAndUpdate({ _id: ID }, update, {
      new: true,
    });

    if (!about) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(about);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getAboutData = async (req, res) => {
  try {
    const aboutData = await AboutData.find();
    return res.status(200).json(aboutData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
