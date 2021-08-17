const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('proyectointegrativa', 'postgres', '18062014', {
    host: 'localhost',
    dialect: 'postgres'
  });
  
  module.exports={sequelize};