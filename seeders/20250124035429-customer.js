'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let obj = await queryInterface.bulkInsert("Customers", [
      {
        createdAt: new Date(),
        name: "Test1",
        address: 'Test address',
        phone:"777-777-7777"
      }
    ])

    return await queryInterface.bulkInsert("Jobs", [
      {
        createdAt: new Date(),
        description: "Test Job",
        repairOrderId: obj.id,
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Customers', null, {});

  }
};
