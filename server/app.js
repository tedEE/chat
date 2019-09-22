const app = require('express')()
const server = require('http').createServer(app);
const io = require('socket.io')(server)

const m = (name, text, id) =>({name, text, id})

io.on('connection', (socket)=>{
    console.log('IO Connected')

    socket.on('userJoined',(data, cb)=>{
        if (!data.name || !data.room) {
            return cb('Данные некорректны')
        }

        socket.join(data.room)
        cb({userId: socket.id})
        socket.emit('newMassage', m('admin', `Добро пожаловать ${data.name}`))
        socket.emit('newMassage', m('test', `Добро пожаловать`))
        socket.broadcast.to(data.room)
            .emit('newMassage', m('admin', `Пользователь ${data.name} зашел.`))
    })

    socket.on('CreateMassage', (data)=>{
        setTimeout(()=>{
            socket.emit('newMassage', {
                text : data.text
            })
        }, 500)
    })

    // socket.emit('newMassage', {
    //     text : 'WHAT'
    // })
})

module.exports = {
    app, server
}
