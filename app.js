const express = require('express');
const app = express()
let port = 3000
const server = app.listen(port)
let io = require('socket.io')(server)

app.set("io",io)

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json()); //header info to string
app.use(express.urlencoded({extended: true}))

// module.exports = (io)=>{

// }
app.use(require('./routes/index'))
app.use(require('./routes/music'))
app.use(require('./routes/bio'))
app.use(require('./routes/chat'))


io.on('connection', socket =>{
    socket.on('postMessage',msgClient=>{
        console.log("2")
        io.emit('updateMsg', msgClient)
    })
})