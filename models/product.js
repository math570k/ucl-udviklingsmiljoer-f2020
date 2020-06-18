"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      pieces: DataTypes.INTEGER,
      price: DataTypes.REAL,
      unit: DataTypes.STRING,
    },
    {}
  );
  Product.associate = function (models) {
    // associations can be defined here
    Product.belongsTo(models.Category, {
      onDelete: "SET NULL",
      foreignKey: {
        allowNull: true,
      },
    });
    Product.belongsTo(models.Stock, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
    Product.belongsTo(models.Supplier, {
      onDelete: "SET NULL",
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return Product;
};
