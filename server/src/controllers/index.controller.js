const { usuarioModel } = require('../models/usuario');
const {verificacion, app }= require("../index");
//*Se buscara un usuario
const loginUsers= async (req,res) => { 
    const {nombre,contrasena}=req.body;
    
    await usuarioModel.findOne({attributes:["nombreusuario"], where:{nombreusuario:nombre,contrasenausuario:contrasena}})
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
    
    loginUsers,
    createUsers
}