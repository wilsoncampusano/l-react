import React from 'react';


import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "dc34365935bc2300175f6b5110ebd7c6";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather  = async (e) => {
    e.preventDefault();
    const CITY = e.target.elements.city.value
    const COUNTRY = e.target.elements.country.value

    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}`);

    const data = await apiCall.json();


    this.setState({
      temperature: data.main.temperature,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    });
    console.log(data);
  }

  render(){
    return(
        <div>
          <Titles/>
          <Form getWeather={this.getWeather}/>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
    );
  }
}


export default App;
