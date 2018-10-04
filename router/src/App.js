import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contant';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>
              <Route path="/" component= { Home } exact ></Route>
              <Route path="/contact" component={ Contact }></Route>
              <Route path="/about" component = { About }></Route>
              <Route component={ Error }></Route>
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
