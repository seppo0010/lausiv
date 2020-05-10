import React from 'react';
import io from 'socket.io-client';

class App extends React.Component {
  componentDidMount() {
    const socket = io();
    socket.connect()
    socket.on('connect', () => {
      console.log('connected')
    })
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
