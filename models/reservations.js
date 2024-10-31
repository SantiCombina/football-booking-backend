"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservations.belongsTo(models.Users, {
        foreignKey: "id_user",
        as: "user",
      });
      Reservations.belongsTo(models.Fields, {
        foreignKey: "id_field",
        as: "field",
      });
    }
  }

  Reservations.init(
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      id_field: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Fields",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Reservations",
    }
  );

  return Reservations;
};
