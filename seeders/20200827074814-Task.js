'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        name: 'Task A',
        status: 'todo',
        description: 'Lorem Ipsum dolor sit amet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Task B',
        status: 'todo',
        description: 'Lorem Ipsum dolor sit amet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Task C',
        status: 'doing',
        description: 'Lorem Ipsum dolor sit amet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Task D',
        status: 'done',
        description: 'Lorem Ipsum dolor sit amet',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Tasks', null, {});
  }
};
