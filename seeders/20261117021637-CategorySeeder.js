"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          nama: "Snack",
          deskripsi: "Makanan ringan yang cocok untuk camilan.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Minuman",
          deskripsi: "Berbagai jenis minuman segar dan hangat.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Makanan Berat",
          deskripsi: "Hidangan utama yang mengenyangkan.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
