const multer = require("multer");

//configure multer storage
const storage = multer.diskStorage({
  destination: "",
  filename: (_req, file, cb) => {
    const uniqSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.fieldname + "-" + uniqSuffix;
    cb(filename);
  },
});
//create multer instance
const upload = multer({ storage });
module.exports = upload;
