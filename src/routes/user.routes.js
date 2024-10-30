const router = require("express").Router();
const Users = require("../models/user.model");

router.get("/users", async (req, res) => {
  res.send("Esto es una ruta de usuario");
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/users/:id", async (req, res) => {
  res.send("Esto es una ruta de usuario");
  try {
    const user = await Users.findOne({ where: { id: req.params.id } });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/users", async (req, res) => {
  res.send("Esto es una ruta de usuario");
});

router.put("/users", async (req, res) => {
  res.send("Esto es una ruta de usuario");
});

router.delete("/users", async (req, res) => {
  res.send("Esto es una ruta de usuario");
});

module.exports = router;
