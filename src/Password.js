import React, { Component } from 'react';
import './Password.css';

class Password extends Component {
  state = {
    userInput: '',
  };

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });

    let stringLength = document.getElementById('characters').value;
    if (isNaN(stringLength)) {
      document.getElementById('warning').innerHTML = 'Please enter a number.';
    } else {
      console.log('Valid number entered');
      document.getElementById('warning').innerHTML = '';
    }
  };

  createPassword = (event) => {
    this.setState({ userInput: event.target.value });
    let stringLength = document.getElementById('characters').value;
    console.log(stringLength);

    var string = '';
    var charList =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < stringLength; i++) {
      string += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    // Render the password
    document.getElementById('password').innerHTML = string;
  };

  render() {
    return (
      <div>
        <div style={{ margin: '0 80px' }}>
          <input
            type='text'
            id='characters'
            placeholder='Enter a number'
            onChange={this.handleChange}
            value={this.state.userInput}
          />
          <p id='instructions'>
            Please enter the number of characters you want the password to have.
          </p>
          <br />
          <button id='pw-btn' onClick={this.createPassword}>
            Generate Password
          </button>

          <p id='password'>{this.state.string}</p>
          <p id='warning'></p>
        </div>
      </div>
    );
  }
}

export default Password;
