const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cancha = sequelize.define('Cancha', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio_por_hora: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    disponibilidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Cancha;
