const router = require("express").Router();
const Reservation = require("../models/reservation.model");
const Field = require("../models/field.model");
const User = require("../models/user.model");

router.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      include: [User, Field],
    });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/reservations/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findOne({
      where: { id: req.params.id },
      include: [User, Field],
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
    const newReservation = await Reservation.create(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
