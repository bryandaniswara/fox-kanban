'use strict';
const {
  Model
} = require('sequelize');
    let bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Task,{through:models.UserTask})
      User.hasMany(models.Task)
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    verification: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user,option)=>{
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.password, salt);
    user.password = hash
  })
  return User;
};