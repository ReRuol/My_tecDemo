const { Socket } = require('dgram')

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
io.on('connection', Socket => {
    console.log('有用户连接上了')
    userCount++
    Socket.userName = `用户${userCount}` 
})

app.listen(PORT, () => {
    console.log('服务器端口启动成功')
})