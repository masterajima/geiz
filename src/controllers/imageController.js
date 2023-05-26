class ImageController {
  async uploadImage() {
    //access upload file
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      return res.status;
      //process uploded file
      return res.status(200).json({ message: "Image uploaded successfully" });
    } catch (error) {
      console.error("Error uploading image", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = ImageController;
