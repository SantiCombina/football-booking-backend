const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("football_booking_dev", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

class Reservation extends Model {}

Reservation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    fieldId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Fields",
        key: "id",
      },
    },
    reservationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Reservation",
  }
);

module.exports = Reservation;
