const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("football_booking", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

class Field extends Model {}

Field.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Field",
  }
);

module.exports = Field;