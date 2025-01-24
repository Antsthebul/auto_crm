'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const primaryKey = {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
        
    }
    await queryInterface.sequelize.query(
      "CREATE TYPE ticket_state AS ENUM ('REPAIR_ORDER', 'APPOINTMENT')")

    await queryInterface.createTable('Customers', {
      ...primaryKey,
      createdAt: {type: Sequelize.DATE, 
                          allowNull: false,
                          defaultValue: Sequelize.NOW },
      updatedAt: {type: Sequelize.DATE, 
                          defaultValue: Sequelize.NOW},
        name: { type: Sequelize.STRING, allowNull: false },
        address: {type: Sequelize.STRING, allowNull: false },
        phone:{type: Sequelize.STRING, allowNull: false },
        email: {type: Sequelize.STRING },
    });

    await queryInterface.createTable('CustomerVehicles', {
      ...primaryKey,
      year: { type: Sequelize.STRING, allowNull: false },
      make:  { type: Sequelize.STRING, allowNull: false },
      model:  { type: Sequelize.STRING, allowNull: false },
      trim:  { type: Sequelize.STRING, allowNull: false },
      plate:   { type: Sequelize.STRING, allowNull: false },
    })
    
    await queryInterface.createTable('Tickets', {
      ...primaryKey,
      createdAt: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW,},
      updatedAt: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW,},
      scheduledAt: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW,},
      completedAt: {type: Sequelize.DATE},
      state:{type: Sequelize.ENUM, values:["APPOINTMENT", "REPAIR_ORDER"]}
      
    })

    await queryInterface.createTable('Jobs', {
      ...primaryKey,
      description: { type: Sequelize.STRING, allowNull: false },
      createdAt: {type: Sequelize.DATE, allowNull: false,defaultValue: Sequelize.NOW,},
      updatedAt: {type: Sequelize.DATE, allowNull: false,defaultValue: Sequelize.NOW,},
      repairOrderId:{type: Sequelize.INTEGER, references:{model:{tableName:"Tickets", }, key:"id"}},
      completedAt: {type: Sequelize.DATE},
    })


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Customers')
    await queryInterface.dropTable('CustomerVehicles')
    await queryInterface.dropTable('Tickets')
    await queryInterface.dropTable('Jobs')
  }
};
