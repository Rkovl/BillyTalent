const express = require('express');
const router = express.Router();

router.get('/bio',(req,res)=>{
    res.render('bio',{
        
    })
})

module.exports = router;