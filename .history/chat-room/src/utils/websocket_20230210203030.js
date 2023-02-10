const defaultUrl = 'ws://echo.websocket.org'

class newWS {

    constructor(url, protocol) {
        //走默认链接
        if (!url || typeof url !== 'string') {
            url = defaultUrl
        }
        const ws = new WebSocket(url, protocol)

        this.ws = ws
    }

    //连接开启时
    onOpen(func = null){
        if(typeof func === 'function'){
            this.ws.onopen = ()=>{
                func()
            }
        }
    }

    //发送消息
    send(msg){
        if(typeof msg === 'function'){
            msg = msg()
        }

        console.log('this.ws is ',this.ws)
        // this.ws.send(msg)
    }


}

export default newWS

