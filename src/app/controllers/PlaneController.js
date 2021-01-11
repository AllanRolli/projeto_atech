const { Plane } = require('../models')

class PlaneController {
    async show(req, res) {

        const filtro = await Plane.find(req.query);
    
        return res.json(filtro);
        }
    
    async store(req, res) {
        try {
            const { id } = req.params
            const { name } = req.body
            const created = await Plane.create({
            fly_id: id, 
            name               
            });
    
            return res.status(201).send(created);
        } catch (error) {
            res.status(400).send({ error: "Registration failed" });
        }
    }
}
module.exports = new PlaneController();