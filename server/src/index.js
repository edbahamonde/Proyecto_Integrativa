const express=require('express');
const app = express();
const { usuarioModel } = require('./models/usuario');


app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hola mundo");
});
usuarioModel.findAll({attributes:["nombreusuario"]})
    .then(usuarios =>{
        const resultados = JSON.stringify(usuarios)
        console.log(resultados)
    })
    .catch(error =>{
        console.log(error)
    })

app.listen(3000,()=>{
    console.log("servidor corriendo");
});

