const { usuarioModel } = require('../models/usuario');
const {verificacion, app }= require("../index");
//*Se buscara un usuario
const getUsers= async (req,res) => { 
    await usuarioModel.findOne({attributes:["nombreusuario"]})
    .then(usuarios =>{
        const resultados = JSON.stringify(usuarios)
        console.log(resultados)
        res.json(usuarios);

    })
    .catch(error =>{
        console.log(error)
        res.json({
            message: "No existen usuarios",  
          })
    })
};
const createUsers= async (req,res) => { 
    const { usuario, contrasena}= req.body;
     usuarioModel.create({nombreusuario: usuario,
         contrasenausuario: contrasena}, { fields: ['nombreusuario','contrasenausuario'] })
     .then(() =>{
        res.json({
            message: "Crear usuario",  
          })
     })
     .catch(error =>{
         console.log(error)
         res.json({
             message: "No crear usuario",  
           })
     })
};
module.exports = {
    getUsers,
    createUsers
}