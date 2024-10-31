const router = require("express").Router();
const { Reservations, Users, Fields } = require("../../models");

router.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservations.findAll({
      include: [
        { model: Users, as: "user" },
        { model: Fields, as: "field" },
      ],
    });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/reservations/:id", async (req, res) => {
  try {
    const reservation = await Reservations.findOne({
      where: { id: req.params.id },
      include: [
        { model: Users, as: "user" },
        { model: Fields, as: "field" },
      ],
    });
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ error: "Reserva no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/reservations", async (req, res) => {
  try {
    const newReservation = await Reservations.create(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
