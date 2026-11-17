"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Menu, { foreignKey: "menu_id" });
      this.belongsTo(models.Order, { foreignKey: "order_id" });
    }
  }
  OrderDetail.init(
    {
      menu_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      qty: { type: DataTypes.INTEGER, validate: { min: 1 } },
      subtotal: { type: DataTypes.INTEGER, validate: { min: 0 } },
    },
    {
      sequelize,
      modelName: "OrderDetail",
    },
  );
  return OrderDetail;
};
