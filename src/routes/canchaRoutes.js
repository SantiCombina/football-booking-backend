const express = require('express');
const router = express.Router();
const Cancha = require('../models/cancha');

router.get('/', async (req, res) => {
    const canchas = await Cancha.findAll();
    res.json(canchas);
});

router.post('/', async (req, res) => {
    const nuevaCancha = await Cancha.create(req.body);
    res.status(201).json(nuevaCancha);
});

module.exports = router;
