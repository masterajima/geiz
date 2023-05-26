const express = require("express");
const ImageController = require("../controllers/imageController");
const upload = require("../middleware/upload");

const router = express.Router();
const imageController = new ImageController();

//image upload route
router.post("/upload", upload.single("image"), imageController.uploadImage);
module.exports = router;
