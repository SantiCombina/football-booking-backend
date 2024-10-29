const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { nombre, apellido, email, contraseña } = req.body;

        const nuevoUsuario = await Usuario.create({ nombre, apellido, email, contraseña });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el usuario' });
    }
});


module.exports = router;
