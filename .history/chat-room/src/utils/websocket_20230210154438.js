
const newWS = function(url, protocol){
    const ws = new WebSocket(url, protocol)

    return ws
}

export default newWS

