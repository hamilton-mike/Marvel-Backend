const express = require('express');
const router = express.Router();
const Comic = require('../models/comicItem')

router.get('/', async (req, res) => {
    try {
        const comics = await Comic.find()
        res.status(200).json(comics)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const comic = await Comic.findById(req.params.id)
        res.status(200).json(comic)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newComic = await Comic.create(req.body)
        res.status(200).json(newComic)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const editComic = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(editComic)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/', async (req, res) => {
    try {
        const destroyComic = await Comic.findByIdAndRemove(req.params.id)
        res.status(200).json(destroyComic)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;
