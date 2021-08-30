const express=require('express');
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());

//*routes
app.use(require("./routes/routes"));



app.listen(3000,()=>{
    console.log("servidor corriendo");
});

module.exports={
    app
}