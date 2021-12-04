const express = require('express');
const router = express.Router();
const Hero = require('../models/heroSchema');

router.get('/', async (req, res) => {
    try {
        const heros = await Hero.find()
        res.status(200).json(heros)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id)
        res.status(200).json(hero)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newHero = await Hero.create(req.body)
        res.status(200).json(newHero)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const editHero = await Hero.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(editHero)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const destroyHero = await Hero.findByIdAndRemove(req.params.id)
        res.status(200).json(destroyHero)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;
