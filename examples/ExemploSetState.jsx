import React, { Component } from 'react';

class ExemploSetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: {
        button1: true,
        button2: true,
        button3: true
      }
    };
  }

  handleClick(name) {
    this.setState(state => {
      return {
        buttons: {
          [name]: !state.buttons[name]
        }
      };
    });
  }

  render() {
    const { button1, button2, button3 } = this.state.buttons;

    return (
      <div>
        <button
          onClick={() => this.handleClick('button1')}
          className={`btn btn-block ${button1 ? 'btn-success' : 'btn-secondary'}`}>
          {button1 ? 'On' : 'Off'}
        </button>

        <button
          onClick={() => this.handleClick('button2')}
          className={`btn btn-block ${button2 ? 'btn-success' : 'btn-secondary'}`}>
          {button2 ? 'On' : 'Off'}
        </button>
        <button
          onClick={() => this.handleClick('button3')}
          className={`btn btn-block ${button3 ? 'btn-success' : 'btn-secondary'}`}>
          {button3 ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

export default ExemploSetState;
