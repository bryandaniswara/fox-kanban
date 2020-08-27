'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert("Users",[
     {
       username:"kanban",
       password:"kanban",
       email:"fox@kanban",
       verification:false,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      username:"hacktiv",
      password:"hack8",
      email:"fox@hack",
      verification:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     username:"tropical",
     password:"fox46",
     email:"fox46@hack",
     verification:false,
     createdAt: new Date(),
     updatedAt: new Date()
   }

   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
