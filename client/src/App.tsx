import React, { ChangeEvent } from 'react';
import io from 'socket.io-client';
import { Container } from '@material-ui/core';
import SelectRoom from './SelectRoom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  socket: SocketIOClient.Socket;

  constructor(props: any) {
    super(props);
    this.socket = io();
    this.socket.connect();
    this.socket.on('connect', () => {
      console.log('connected')
    })
  }

  render() {
    return (
      <Container maxWidth="sm">
        <br />
        <Router>
          <Switch>
            <Route exact path="/room/:room">
            </Route>
            <Route exact path="/">
              <SelectRoom></SelectRoom>
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
