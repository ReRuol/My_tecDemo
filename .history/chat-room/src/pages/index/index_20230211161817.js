import logo from './logo.svg';
import Socket from '@/utils/websocket'

const index = ()=>{

    const socket = new Socket()

    socket.onOpen(()=>{
        console.log('socket 已连接')
        socket.ws.send('test')
    })

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div style={{background:'red'}}>button</div>
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