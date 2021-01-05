const express = require("express");
const path = require("path");
const cors = require("cors");
const router = express.Router();

router.use(cors());
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/docs/index.html"));
});
module.exports = router;