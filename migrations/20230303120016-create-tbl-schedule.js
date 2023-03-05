'use strict'
/* eslint-disable camelcase */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profesional_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_Professionals',
          key: 'id'
        }
      },
      appointment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_Appointments',
          key: 'id'
        }
      },
      workday: {
        type: Sequelize.DATE
      },
      start_time_slot: {
        type: Sequelize.TIME
      },
      end_time_slot: {
        type: Sequelize.TIME
      },
      available: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_Schedules')
  }
}
