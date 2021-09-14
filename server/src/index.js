const express=require('express');
const app = express();
const cors= require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//*routes
app.use(require("./routes/routes"));



app.listen(3000,()=>{
    console.log("servidor corriendo");
});

module.exports={
    app
}