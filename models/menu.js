"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: "category_id" });

      this.hasMany(models.OrderDetail, { foreignKey: "menu_id" });
    }
  }
  Menu.init(
    {
      nama: DataTypes.STRING,
      Harga: {
        type: DataTypes.INTEGER,
        validate: { min: 0 },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: { min: 0 },
      },
      image: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Menu",
      paranoid: true,
    },
  );
  return Menu;
};
