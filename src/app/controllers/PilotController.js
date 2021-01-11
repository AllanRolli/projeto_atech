const { Pilot } = require('../models')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authConfig = require("../../config/auth.json");

class PilotController {
  async index(req, res) {
    const list = await Pilot.find();

    return res.json(list);
  }

  async create(req, res) {
    const { email } = req.body;
    try {
      if (await Pilot.findOne({ email }))
        return res.status(400).json({ error: "User already exists" });

      const pilot = await Pilot.create(req.body);
      const token = jwt.sign({ id: pilot.id }, authConfig.secret, {
        expiresIn: authConfig.timer,
      });
      pilot.password = undefined;

      return res.status(201).send({ pilot, token });
    } catch (error) {
      res.status(400).send({ error: "Registration failed" });
    }
  }

  async authenticate(req, res) {
    const { email, password } = req.body;

    try {
      const pilot = await Pilot.findOne({ where: { email } }).select("+password");

      if (!pilot || !(await bcrypt.compare(password, pilot.password)))
        return res.status(401).send({ error: "Wrong user or email" });

      pilot.password = undefined;

      const token = jwt.sign({ id: pilot.id }, authConfig.secret, {
        expiresIn: authConfig.timer,
      });
      res.send({ pilot, token });
    } catch (error) {
      res.send(error);
    }
  }
}
module.exports = new PilotController()
