const app = require('express')()
const server = require('http').createServer(app);
const io = require('socket.io')(server)

io.on('connection', (socket)=>{
    console.log('IO Connected')

    socket.on('CreateMassage', (data)=>{
        setTimeout(()=>{
            socket.emit('newMassage', {
                text : data.text + ' Server '
            })
        }, 500)
    })

    socket.emit('newMassage', {
        text : 'WHAT'
    })
})

module.exports = {
    app, server
}
