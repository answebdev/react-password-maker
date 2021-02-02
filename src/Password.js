import React, { Component } from 'react';
import './Password.css';

class PasswordGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    copyMessage: 'Password copied to clipboard.',
  });

  resetState = () => {
    this.setState(this.getInitialState());
  };

  state = {
    userInput: '',
    copied: '',
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

    // Limit password to no more than 50 characters (cannot be less than 0).
    if (stringLength > 50 || stringLength < 1) {
      document.getElementById('warning').innerHTML =
        'Please enter a number between 1 and 50.';
    }
  };

  createPassword = (event) => {
    this.setState({ copied: '' });
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
    document.getElementById('copy-icon').style.display = 'inline';

    // Do not print if value entered is more than 50, or less than 1.
    if (stringLength > 50 || stringLength < 1) {
      document.getElementById('password').innerHTML = '';
      document.getElementById('copy-icon').style.display = 'none';
    }

    // Do not display copy icon if nothing is entered but button is clicked.
    if (stringLength === '') {
      document.getElementById('copy-icon').style.display = 'none';
    }

    // Do not display copy icon if something other than a number is entered.
    if (isNaN(stringLength)) {
      document.getElementById('copy-icon').style.display = 'none';
    }
  };

  // Copy password to clipboard.
  copyToClipboard = async (e) => {
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(this.textContent);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    this.setState({ copied: true });

    setTimeout(() => {
      this.setState({ copyMessage: '' });
    }, 5000);

    // Reset state of message to be able to get message again when copying more than once.
    this.resetState({ copyMessage: '' });
  };
  initRef = (c) => (this.textContent = c);

  render() {
    return (
      <div>
        <div>
          <input
            style={{
              border: `${this.props.inputBorder}`,
              padding: `${this.props.inputPadding}`,
              borderRadius: `${this.props.inputBorderRadius}`,
              fontFamily: `${this.props.inputFont}`,
            }}
            type='text'
            id='characters'
            placeholder='Enter a number'
            onChange={this.handleChange}
            value={this.state.userInput}
          />
          <p
            style={{
              color: `${this.props.instructionsTextColor}`,
              fontSize: `${this.props.instructionsFontSize}`,
              fontFamily: `${this.props.instructionsFont}`,
            }}
            id='instructions'
          >
            Please select the length of your password, from 1 to 50 characters.
          </p>
          <br />
          <button
            className={this.props.className}
            style={{
              backgroundColor: `${this.props.buttonColor}`,
              color: `${this.props.buttonTextColor}`,
              borderRadius: `${this.props.buttonBorderRadius}`,
              padding: `${this.props.buttonPadding}`,
              fontFamily: `${this.props.buttonFont}`,
            }}
            id='pw-btn'
            onClick={this.createPassword}
          >
            Generate Password
          </button>

          <div className='pw-div'>
            <i
              style={{
                color: `${this.props.iconColor}`,
                fontSize: `${this.props.iconSize}`,
              }}
              id='copy-icon'
              onClick={this.copyToClipboard}
              className='far fa-copy'
            ></i>

            <p ref={(c) => (this.textContent = c)} id='password'>
              {this.state.string}
            </p>
          </div>
          <div
            style={{
              color: `${this.props.copyMessageTextColor}`,
              fontSize: `${this.props.copyMessageFontSize}`,
              fontFamily: `${this.props.copyMessageFont}`,
            }}
            className='copy-msg'
          >
            {this.state.copied && <p>{this.state.copyMessage}</p>}
          </div>

          <p
            style={{
              color: `${this.props.errorMsgTextColor}`,
              fontSize: `${this.props.errorMsgFontSize}`,
              fontFamily: `${this.props.errorMsgFont}`,
            }}
            id='warning'
          ></p>
        </div>
      </div>
    );
  }
}

export default PasswordGenerator;
