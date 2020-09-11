import React, { Component } from "react";

import { Router, Route, Switch, Link, Redirect } from "react-router-dom";

import history from "./history";

import Main from "./pages/Main";
import Stations from "./pages/Stations";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Stations" component={Stations} />
        </Switch>
      </Router>
    );
  }
}

export default App;
