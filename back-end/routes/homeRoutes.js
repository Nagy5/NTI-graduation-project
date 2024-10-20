const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/get", homeController.getData);

router.post("/add", homeController.addData);

router.patch("/update/:id", homeController.updateData);

module.exports = router;
