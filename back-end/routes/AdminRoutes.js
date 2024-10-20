const adminController = require("../controllers/adminController");
const auth = require("../Utilities/auth");

const express = require("express");
const router = express.Router();

router.post("/add", adminController.addAdminData);
router.post("/login", adminController.logIn);
router.get("/get", auth.verifyToken, adminController.getAdminInfo);

module.exports = router;
