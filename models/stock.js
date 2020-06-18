"use strict";
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define(
    "Stock",
    {
      stock: DataTypes.INTEGER,
      backorder: DataTypes.INTEGER,
    },
    {}
  );
  Stock.associate = function (models) {
    // associations can be defined here
  };
  return Stock;
};
