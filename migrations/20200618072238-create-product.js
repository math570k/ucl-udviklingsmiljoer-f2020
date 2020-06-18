"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      pieces: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.REAL,
      },
      unit: {
        type: Sequelize.STRING,
      },
      stock: {
        type: Sequelize.INTEGER,
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        allowNull: true,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      SupplierId: {
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        allowNull: true,
        references: {
          model: "Suppliers",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Products");
  },
};
