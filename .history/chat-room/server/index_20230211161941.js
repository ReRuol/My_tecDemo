const ws = require('nodejs-websocket')
const PORT = 3001

//每次只要有用户连接，函数就会被执行，并给当前连接用户创建connect对象
const server = ws.createServer(connect =>{
    console.log('有用户连接上了')

    connect.on('text',(data)=>{
        console.log('接收到用户信息',data)
    })
})

server.listen(PORT, ()=>{
    console.log('端口启动成功')
})