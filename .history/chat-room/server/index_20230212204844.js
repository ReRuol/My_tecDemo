const app = require('http').createServer(handler)
const io = require('socket.io')(app)
const PORT = 3001

//当前用户连接数
let userCount = 0

const TYPE_LEAVE = 0
const TYPE_LOGING = 1 
const TYPE_MSG = 2

function handler(req, res){

    res.end('fuck world')
}

//每次只要有用户连接，函数就会被执行，并给当前连接用户创建connect对象
io.on('connection',(connect => {
    console.log('有用户连接上了')
    userCount++
    connect.userName = `用户${userCount}`

    //通知群聊有用户加入聊天室
    broadcast({
        type: TYPE_LOGING,
        msg: connect.userName + '进入了聊天室',
        time: new Date().toLocaleDateString()
    })

    connect.on('text', (data) => {
        console.log('接收到用户信息', data)
        broadcast({
            type: TYPE_MSG,
            msg: data,
            time: new Date().toLocaleDateString()
        })
    })

    connect.on('close', (code, reason) => {
        console.log('websocket 连接已关闭')
        userCount--
        broadcast({
            type: TYPE_LEAVE,
            msg: connect.userName + '离开了聊天室',
            time: new Date().toLocaleDateString()
        })
    })

    connect.on('error', (err) => {
        console.log('服务端连接报错', err)
    })
}))

//广播函数,给所有用户发送消息
const broadcast = (msg) => {
    const trans = JSON.stringify(msg)
    server.connections.forEach((i) => {
        i.send(trans)
    })
}

app.listen(PORT, () => {
    console.log('服务器端口启动成功')
})