import React from 'react';


class Form extends React.Component {

  render(){
    return(
      <div>
        <form onSubmit={this.props.getWeather}>
          <input name='city' placeholder='City...'></input>
          <input name='country' placeholder='Country...'></input>
          <button >Weather</button>
        </form>
      </div>
    );
  }
}



export default Form;
