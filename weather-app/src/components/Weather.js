import React from 'react'


class Weather extends React.Component{


  render(){
    return(
      <div>
        { this.props.city}
        { this.props.country}
        { this.props.humidity}
        { this.props.temperature}
        { this.props.description}
        { this.props.error}

      </div>
    );
  }
}


export default Weather
