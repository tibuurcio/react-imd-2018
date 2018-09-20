import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: true };

    // Necessário para fazer o método funcionar
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return { on: !state.on }
    });
  }

  render() {
    const btnClass = this.state.on ? 'btn-success' : 'btn-secondary';
    return (
      <button onClick={this.handleClick} className={`btn btn-block ${btnClass}`}>
        {this.state.on ? 'On' : 'Off'}
      </button>
    );
  }
}