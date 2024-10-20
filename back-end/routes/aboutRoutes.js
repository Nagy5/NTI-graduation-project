const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutController");

router.post("/add", aboutController.addAboutData);

router.get("/get", aboutController.getAboutData);

router.patch("/update/:id", aboutController.updateAboutData);

module.exports = router;
