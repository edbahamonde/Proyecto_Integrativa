const { sequelize }= require('../database/database');
const { Sequelize } = require('sequelize');
const usuarioModel = sequelize.define('usuarios',{
    
    "nombreusuario": Sequelize.STRING,
    "contrasenausuario": Sequelize.STRING

});

  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully!');
  }).catch((err) => {
    console.log('Can\'t establish database connection:\n' + err);
  });

module.exports={ usuarioModel }