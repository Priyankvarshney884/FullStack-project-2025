const express = require("express");
const userController = require("../controllers/userController");    
// Importing userController to handle user-related requests

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

module.exports = router;
