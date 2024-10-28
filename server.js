const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Importa rutas (a definir en el siguiente paso)
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
