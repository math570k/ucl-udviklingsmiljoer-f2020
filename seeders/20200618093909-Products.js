"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        title: "Ale no. 16",
        description: "Special øl fra Bryggeriet Refvindinge.",
        pieces: 24,
        price: 100,
        unit: "stk.",
        stock: 12,
        CategoryId: 1,
        SupplierId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pepsi Max",
        description: "Den populære Pepsi Max!",
        pieces: 8,
        price: 20,
        unit: "stk.",
        stock: 10,
        CategoryId: 1,
        SupplierId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Faxe Kondi",
        description: "Faxe Kondi til den varme sommer.",
        pieces: 8,
        price: 20,
        unit: "stk.",
        stock: 8,
        CategoryId: 1,
        SupplierId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Tærtedej",
        description: "Bagemix Tærtedej",
        pieces: 8,
        price: 29.99,
        unit: "pakker",
        stock: 11,
        CategoryId: 2,
        SupplierId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Brunch Boller",
        description: "Bagemix Brunch Boller",
        pieces: 8,
        price: 29.99,
        unit: "pakker",
        stock: 13,
        CategoryId: 2,
        SupplierId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Caesar Dressing",
        description: "Lækker sommer dressing fra Svansøe.",
        pieces: 4,
        price: 9.99,
        unit: "flaske",
        stock: 26,
        CategoryId: 3,
        SupplierId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
