const defaultUrl = 'ws://echo.websocket.org'

class newWS {
    
    constructor(url, protocol) {
        //走默认链接
        if (!url || typeof url !== 'string') {
            url = defaultUrl
        }
        const ws = new WebSocket(url, protocol)
        return ws
    }


}

export default newWS

