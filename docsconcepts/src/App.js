import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user){
    return user.firstName + ' ' + user.lastName
}


const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarId: "1234567890"
};

function greeting(user){
  if (user){
    return element
  }else {
    return <h1>Hello, Stranger.</h1>
  }
}

const element = <div  tabIndex="0"> <h1 data-custom-id={ user.avatarId } >Hello , {formatName(user)}!</h1> </div>

class App extends Component {
  

  render() {
    return (
      greeting(user)
    );
  }
}

export default App;
