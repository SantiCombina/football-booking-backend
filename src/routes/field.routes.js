const router = require("express").Router();
const Field = require("../models/field.model");

router.get("/fields", async (req, res) => {
  res.send("Esto es una ruta de canchitas");
  try {
    const fields = await Field.findAll();
    res.json(fields);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/fields/:id", async (req, res) => {
  const field = await Field.findOne({ where: { id: req.params.id } });
  if (field) {
    res.json(field);
  } else {
    res.status(404).json({ error: "Cancha no encontrada" });
  }
});

router.post("/fields", async (req, res) => {
  const newField = await Field.create(req.body);
  res.status(201).json(newField);
});

module.exports = router;
