const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./src/config/config.json');
const app = require('./src/app/app.js');
const dbConfig = config.development;
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});

app.use(express.json());

const userRoutes = require('./src/routes/user.routes');
app.use('/api/v1', userRoutes);
const fieldRoutes = require('./src/routes/field.routes');
app.use('/api/v1', fieldRoutes);
const reservationRoutes = require('./src/routes/reservation.routes');
app.use('/api/v1', reservationRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

sequelize.authenticate()
  .then(() => {
      console.log('Conectado a la base de datos');
  })
  .catch(err => {
      console.error('No se pudo conectar a la base de datos:', err);
  });