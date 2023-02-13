const ws = require('nodejs-websocket')
const PORT = 3001

//当前用户连接数
let userCount = 0

//每次只要有用户连接，函数就会被执行，并给当前连接用户创建connect对象
const server = ws.createServer(connect =>{
    console.log('有用户连接上了')
    userCount++
    connect.user = {
        userName:`用户${userCount}`
    } 
    connect.on('text',(data)=>{
        console.log('接收到用户信息',data)
        connect.send('from server:'+data)
    })

    connect.on('close',(code, reason)=>{
        console.log('websocket 连接已关闭')
    })

    connect.on('error',(err)=>{
        console.log('服务端连接报错',err)
    })
})

server.listen(PORT, ()=>{
    console.log('端口启动成功')
})