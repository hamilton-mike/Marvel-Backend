const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/', async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;
