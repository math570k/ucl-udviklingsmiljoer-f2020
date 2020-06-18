"use strict";
module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define(
    "Supplier",
    {
      name: DataTypes.STRING,
      website: DataTypes.STRING,
    },
    {}
  );
  Supplier.associate = function (models) {
    // associations can be defined here
    Supplier.hasMany(models.Product);
  };
  return Supplier;
};
