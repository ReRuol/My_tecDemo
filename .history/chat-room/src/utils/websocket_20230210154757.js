const defaultUrl = 'ws://echo.websocket.org'

const newWS = function(url, protocol){

    if(!url || typeof url !==  'string'){
        url = defaultUrl
    }

    const ws = new WebSocket(url, protocol)

    return ws
}

export default newWS

