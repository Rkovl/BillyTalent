const express = require('express');
const router = express.Router();

const dataFile = require('../data/albums.json')
const chatLog = require('../data/chatLog.json')
const fs = require('fs');

router.get('/music',(req,res)=>{
    res.render('music',{
        albums : dataFile.albums
    })
})

router.get('/music/:albumID',(req,res)=>{
    let urlTitle = req.params.albumID
    let albumSingle = []
    let songList = []
    dataFile.albums.forEach(obj=>{
        if (obj.urlTitle == urlTitle){
            albumSingle.push(obj)
            songList = obj.songs
        }
    })
    res.render('music',{
        albums: albumSingle,
        songList: songList
    })
})

router.get('/api',(req,res)=>{
    res.json(chatLog)
});

router.post('/api',(req,res)=>{
    let {name,title, message} = req.body
    chatLog.unshift(req.body)
    fs.writeFile('data/chatLog.json', JSON.stringify(chatLog), 'utf8', err=>{
        if(err){
            res.status(432).send(err)
        }
    })
    res.json(chatLog)
    if (chatLog.length > 10){
        chatLog.pop
    }
})

module.exports = router;