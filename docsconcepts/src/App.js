import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  

  render() {

    const element =  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div> ;
    return (
      element 
    );
  }
}

export default App;
