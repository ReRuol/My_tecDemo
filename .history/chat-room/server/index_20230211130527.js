const ws = require('nodejs-websocket')
const PORT = 3001

const server = ws.createServer(connect =>{
    console.log('有用户连接上了')
})

server.listen(PORT, ()=>{
    console.log('端口启动成功')
})