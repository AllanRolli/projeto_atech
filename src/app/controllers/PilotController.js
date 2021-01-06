const { Pilot } = require('../models')
class PilotController {
  create(req, res) {
    return res.render('auth/signup')
  }

  async store(req, res) {
    await Pilot.create({ ...req.body, avatar })

    return res.redirect('/')
  }
}
module.exports = new PilotController()
