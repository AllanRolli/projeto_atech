const express = require("express");
const path = require("path");
const cors = require("cors");
const Fly = require("./app/controllers/FlyController");
const Pilot = require("./app/controllers/PilotController");
const Plane = require("./app/controllers/PlaneController");
const authMiddleware = require("./app/middlewares/auth");
const router = express.Router();

router.use(cors());
router.post("/authenticate", Pilot.authenticate);

router.get("/pilot", authMiddleware, Pilot.index);
router.get("/flys", authMiddleware, Fly.show);
router.post("/flys", authMiddleware, Fly.create);
router.post("/pilot", Pilot.create);

router.delete("/flys/:id", authMiddleware, Fly.delete);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/docs/index.html"));
});
module.exports = router;