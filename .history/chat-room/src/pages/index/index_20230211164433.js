import logo from './logo.svg';
import Socket from '@/utils/websocket'

const index = ()=>{

    const socket = new Socket()

    const sendText = (msg)=>{
      socket.send(msg)
    }

    socket.onMessage((evt)=>{
        console.log('客户端接收到的信息',evt)
    })

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div onClick={()=>sendText('test')} style={{background:'red'}}>button</div>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}

export default index