const { sequelize }= require('../database/database');
const { Sequelize } = require('sequelize');
const usuarioModel = sequelize.define('usuarios',{
  idusuario: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  nombreusuario: {
    type: Sequelize.STRING,
  },
  contrasenausuario: {
    type: Sequelize.STRING,
  }
  
}, {
  timestamps: false
});

  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully!');
  }).catch((err) => {
    console.log('Can\'t establish database connection:\n' + err);
  });

module.exports={ usuarioModel }