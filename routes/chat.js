const express = require('express');
const router = express.Router();




// let io = express().get("io");

router.get('/chat',(req,res)=>{
    res.render('chat',{
        
    })
})



module.exports = router;