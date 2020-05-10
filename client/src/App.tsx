import React, { ChangeEvent } from 'react';
import io from 'socket.io-client';
import { Container } from '@material-ui/core';
import SelectRoom from './SelectRoom';

declare interface AppState {
  roomName?: string
}

class App extends React.Component<{}, AppState> {
  socket: SocketIOClient.Socket;

  constructor(props: any) {
    super(props);
    this.socket = io();
    this.socket.connect();
    this.socket.on('connect', () => {
      console.log('connected')
    })
  }

  onRoomSelected(roomName: string) {
    this.socket.emit('selectRoom', roomName)
    this.setState({roomName})
  }

  render() {
    const { roomName } = this.state || {};
    return (
      <Container maxWidth="sm">
        <br />
        {!roomName && <SelectRoom onRoomSelected={(room) => this.onRoomSelected(room)}></SelectRoom>}
      </Container>
    );
  }
}

export default App;
