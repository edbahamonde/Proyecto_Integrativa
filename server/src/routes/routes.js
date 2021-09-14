const { Router } = require("express");
const router=Router();
const cors= require('cors')
const { loginUsers, createUsers } = require("../controllers/index.controller");

router.get('/',(req,res)=>{
    res.send("hola mundo");
});
//router.get('/users',cors(), getUsers);
router.post('/users', loginUsers);
router.post('/createusers', createUsers);

module.exports = router;