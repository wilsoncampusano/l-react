import React from 'react';


class Form extends React.Component {

  render(){
    return(
      <div>
        <input name='city' placeholder='City...'></input>
        <input name='country' placeholder='Country...'></input>
        <button >Weather</button>

      </div>
    );
  }
}



export default Form;
