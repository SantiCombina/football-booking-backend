const router = require("express").Router();
const { Fields } = require("../../models");

router.get("/fields", async (req, res) => {
  try {
    const fields = await Fields.findAll();
    res.json(fields);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/fields/:id", async (req, res) => {
  try {
    const field = await Fields.findOne({ where: { id: req.params.id } });
    if (field) {
      res.json(field);
    } else {
      res.status(404).json({ error: "Cancha no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/fields", async (req, res) => {
  try {
    const newField = await Fields.create(req.body);
    res.status(201).json(newField);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
