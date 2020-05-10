import React from 'react';
import { Container } from '@material-ui/core';
import SelectRoom from './SelectRoom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ViewRoom from './ViewRoom';

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <br />
        <Router>
          <Switch>
            <Route exact path="/room/:room">
              <ViewRoom></ViewRoom>
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
