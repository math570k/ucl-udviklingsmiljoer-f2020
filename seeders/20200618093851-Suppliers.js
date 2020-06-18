"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Suppliers", [
      {
        name: "Bryggeriet Refsvindinge",
        website: "http://www.bryggerietrefsvindinge.dk/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Royal Unibrew",
        website: "https://royalunibrew.dk/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Valsemøllen",
        website: "https://www.valsemollen.dk/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Svansø",
        website: "http://www.svansoe.dk/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Suppliers", null, {});
  },
};
