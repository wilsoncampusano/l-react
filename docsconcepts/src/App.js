import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user){
    return user.firstName + ' ' + user.lastName
}


const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function greeting(user){
  if (user){
    return element
  }else {
    return <h1>Hello, Stranger.</h1>
  }
}

const element = <h1>Hello , {formatName(user)}!</h1>

class App extends Component {
  

  render() {
    return (
      greeting()
    );
  }
}

export default App;
