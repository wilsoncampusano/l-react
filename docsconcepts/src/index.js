import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


function Welcome(properties){
    return <h1> Hello, {properties.name}!</h1>;
}


const element = <Welcome name='M'/>


ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
