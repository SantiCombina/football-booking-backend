const express = require("express");
const userRoutes = require("../routes/user.routes");
const fieldRoutes = require("../routes/field.routes");
const reservationRoutes = require("../routes/reservation.routes");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", fieldRoutes);
app.use("/api/v1", reservationRoutes);

module.exports = app;
