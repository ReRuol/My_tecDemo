const ws = require('nodejs-websocket')
const PORT = 3001

//当前用户连接数
let userCount = 0

const TYPE_LEAVE = 0
const TYPE_MSG = 1
const TYPE_LOGING = 2

//每次只要有用户连接，函数就会被执行，并给当前连接用户创建connect对象
const server = ws.createServer(connect =>{
    console.log('有用户连接上了')
    userCount++
    connect.userName =  `用户${userCount}`

    //通知群聊有用户加入聊天室
    broadcast(connect.userName+'进入了聊天室')

    connect.on('text',(data)=>{
        console.log('接收到用户信息',data)
        broadcast(data)
    })

    connect.on('close',(code, reason)=>{
        console.log('websocket 连接已关闭')
        userCount--
        broadcast(connect.userName+'离开了聊天室')
    })

    connect.on('error',(err)=>{
        console.log('服务端连接报错',err)
    })
})

//广播函数,给所有用户发送消息
const broadcast = (msg)=>{
    server.connections.forEach((i)=>{
        i.send(msg)
    })
}

server.listen(PORT, ()=>{
    console.log('端口启动成功')
})