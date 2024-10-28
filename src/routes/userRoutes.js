const express = require('express');
const router = express.Router();
const { Usuario } = require('../models');

router.get('/', async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

module.exports = router;