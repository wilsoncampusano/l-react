import React from 'react'


const Weather = props =>(
  <div className="weather__info">
    {
       props.city && <p className="weather__key">City: <span className="weather__value"> { props.city} </span> 
       
       </p>
    }
    {
       props.country && <p className="weather__key">Country: <span className="weather__value"> { props.country}</span></p>
    }
    {
       props.humidity && <p className="weather__key">Humidity: <span className="weather__value"> { props.humidity}</span></p>
       
    }
    { 
      props.temperature && <p className="weather__key">Temperature: <span className="weather__value">{ props.temperature}</span></p>
    }
    { 
      props.description && <p className="weather__key">Description: <span className="weather__value">{ props.description}</span></p>
    }
    <p className="weather_error">{ props.error}</p>
  </div>
);


export default Weather
