const express = require('express');
const router = express.Router();
const Team = require('../models/teamSchema');
const Hero = require('../models/heroSchema');


router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        res.status(200).json(team);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.post('/', async (req, res) => {
    try {
        const newTeam = await Team.create(req.body);
        res.status(200).json(newTeam)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const editTeam = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(editTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const destroyTeam = await Team.findByIdAndRemove(req.params.id);
        res.status(200).json(destroyTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


module.exports = router;
