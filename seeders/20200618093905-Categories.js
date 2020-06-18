"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      {
        title: "Drikkevare",
        description:
          "Lækre drikkevarer der er dejligt læskende og holder dig kølig henover sommeren!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Bageartikler",
        description: "Gør det nemt at bage med vores bageartikler!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Salat Tilbehør",
        description: "Gør salaten lidt mere lækker!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
