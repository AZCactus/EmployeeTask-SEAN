'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define('employee', {
    name: DataTypes.STRING,
    totalTask: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return employee;
};