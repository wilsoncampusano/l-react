import React from 'react';


const Form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <input name='city' placeholder='City...'></input>
      <input name='country' placeholder='Country...'></input>
      <button >Weather</button>
    </form>
  </div>
);



export default Form;
