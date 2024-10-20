const HomeData = require("../Models/HomeData");
const { isValidObjectId } = require("mongoose");

exports.addData = async (req, res) => {
  try {
    const data = req.body;
    const homeData = await HomeData.create(data);
    res.status(201).json(homeData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.updateData = async (req, res) => {
  try {
    const ID = req.params.id;

    if (!isValidObjectId(ID)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const update = req.body;

    const home = await HomeData.findOneAndUpdate({ _id: ID }, update, {
      new: true,
    });

    if (!home) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(home);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getData = async (req, res) => {
  try {
    const home = await HomeData.find();
    res.status(200).json(home);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
