const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/add", contactController.addData);

router.get("/get", contactController.getData);

router.patch("/update/:id", contactController.updateData);

module.exports = router;
