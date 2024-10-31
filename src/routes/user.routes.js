const router = require("express").Router();
const { Users } = require("../../models");

router.get("/users", async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await Users.findOne({ where: { id: req.params.id } });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/users", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await Users.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await Users.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedUser[0]) {
      res.json({ message: "Usuario actualizado" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const rowsDeleted = await Users.destroy({ where: { id: req.params.id } });
    if (rowsDeleted) {
      res.json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
