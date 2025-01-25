'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const customers = await queryInterface.bulkInsert("Customers", [
      {
        createdAt: new Date(),
        name: "Test1",
        address: 'Test address',
        phone:"777-777-7777"
      }
    ], { returning:true })

    const tickets = await queryInterface.bulkInsert('Tickets', [{
       createdAt: new Date(),
       updatedAt: new Date(),
       scheduledAt:new Date(),
       customerId: customers[0].id,
       state: "APPOINTMENT"
    }], { returning:true })


    return await queryInterface.bulkInsert("Jobs", [
      {
        createdAt: new Date(),
        description: "Test Job",
        ticketId: tickets[0].id,
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Customers', null, {});
     await queryInterface.bulkDelete('Jobs', null, {})
     await queryInterface.bulkDelete("Tickets", null, {})

  }
};
