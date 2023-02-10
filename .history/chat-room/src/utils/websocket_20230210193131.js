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

    onOpen(func = null){
        if(typeof func === 'function'){
            this.ws.onopen = ()=>{
                func()
            }
        }
        
    }


}

export default newWS

