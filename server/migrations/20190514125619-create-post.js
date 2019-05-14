'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      timeLength: {
        type: Sequelize.NUMBER
      },
      timeUnit: {
        type: Sequelize.STRING
      },
      compensation: {
        type: Sequelize.BOOLEAN
      },
      reoccuring: {
        type: Sequelize.BOOLEAN
      },
      reoccuringUnit: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};