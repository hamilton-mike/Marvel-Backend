const express = require('express');
const router = express.Router();
const Team = require('../models/teamSchema');

router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/:id', async (req, res) => {
    try {
        const newTeam = await Team.create(req.body)
        res.status(200).json(newTeam)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;
