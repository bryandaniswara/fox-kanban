'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsToMany(models.User, { through: models.UserTask });
      Task.hasMany(models.UserTask);
    }
  };
  Task.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    deadline: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};