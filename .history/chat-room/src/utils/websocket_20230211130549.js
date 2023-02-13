const defaultUrl = 'ws://localhost:3001'

class newWS {

    constructor(url, protocol) {
        //走默认链接
        if (!url || typeof url !== 'string') {
            url = defaultUrl
        }
        this.ws = new WebSocket(url, protocol)

    }

    //连接开启时
    onOpen(func = null){
        if(typeof func === 'function'){
            this.ws.onopen = (evt)=>{
                func(evt)
            }
        }
    }

    //发送消息
    send(msg){
        if(typeof msg === 'function'){
            msg = msg()
        }

        this.ws.send('test')
    }

    //接收服务端消息
    onMessage(func){
        this.ws.onmessage = (evt)=>{
            func(evt)
        }
    }

    //断开websocket连接
    onClose(func){
        this.ws.onclose = ()=>{
            func()
        }
    }
}

export default newWS

