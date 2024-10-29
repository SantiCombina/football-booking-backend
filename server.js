const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./src/config/config.json');
const dbConfig = config.development;


const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});
app.use(express.json());

// Importa rutas
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/usuarios', userRoutes);

const canchaRoutes = require('./src/routes/canchaRoutes');
app.use('/api/canchas', canchaRoutes);

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