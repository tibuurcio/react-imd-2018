import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

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
    if (this.props.fail) {
      this.setState(state => {
        return {
          buttons: {
            [name]: !state.buttons[name]
          }
        };
      });
    } else {
      this.setState(state => {
        const novoState = Object.assign({}, state);
        novoState.buttons[name] = !state.buttons[name];
        return novoState;
      });
    }
  }

  refresh() {
    this.setState({ buttons: { button1: true, button2: true, button3: true } });
  }

  render() {
    const { button1, button2, button3 } = this.state.buttons;

    return (
      <div style={{ width: '50vw' }}>
        <div className="row justify-content-center">
          <pre style={{ fontSize: '0.6em', color: 'white', textAlign: 'left' }}>
            <code>{JSON.stringify(this.state, null, '  ')}</code>
          </pre>
        </div>
        <div className="row">
          <div className="col">
            <button
              onClick={() => this.handleClick('button1')}
              className={`btn btn-block ${button1 ? 'btn-success' : 'btn-secondary'}`}>
              {button1 ? 'On' : 'Off'}
            </button>
          </div>

          <div className="col">
            <button
              onClick={() => this.handleClick('button2')}
              className={`btn btn-block ${button2 ? 'btn-success' : 'btn-secondary'}`}>
              {button2 ? 'On' : 'Off'}
            </button>
          </div>

          <div className="col">
            <button
              onClick={() => this.handleClick('button3')}
              className={`btn btn-block ${button3 ? 'btn-success' : 'btn-secondary'}`}>
              {button3 ? 'On' : 'Off'}
            </button>
          </div>

          <div className="col">
            <button className="btn btn-block btn-info" onClick={() => this.refresh()}>
              <FontAwesomeIcon icon={faRedo} /> Refresh
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ExemploSetState;
