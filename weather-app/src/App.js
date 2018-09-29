import React from 'react';


import Titles from './components/Titles'
import Form from './components/Form'

const API_KEY = "dc34365935bc2300175f6b5110ebd7c6";

class App extends React.Component {

  getWeather  = async () => {
    const apiCall = await fetch("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}");

    const data = await apiCall.json();

    console.log(data);
  }

  render(){
    return(
        <div>
          <Titles/>
          <Form/>
        </div>
    );
  }
}


export default App;
