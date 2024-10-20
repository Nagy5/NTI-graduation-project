const Admin = require("../models/Admin");
const hashing = require("../Utilities/hashing");
const auth = require("../Utilities/auth");

exports.addAdminData = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await hashing.hashPassword(password);

    const admin = await Admin.create({ email, password: hashedPassword });
    res.status(201).json(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).send("wrong email");
    }

    const isMatch = await hashing.isMatch(password, admin.password);

    if (isMatch) {
      const token = auth.createToken({ id: admin.id, name: admin.name });
      return res.status(200).json({ token });
    } else {
      return res.status(400).send("wrong email or password");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send(err.message);
  }
};

exports.getAdminInfo = async (req, res) => {
  try {
    const users = await Admin.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
