import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" onClick={this.props.onClick} > This div has been clicked {this.props.clicks} Times</div>
    );
  }
}

export default App;
