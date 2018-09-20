import React from 'react';

export default class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      linguagemFavorita: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container-fluid">
        <pre style={{ textAlign: 'left', color: 'white' }}>
          <code>{ JSON.stringify(this.state, null, '  ') }</code>
        </pre>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label style={{ fontSize: '0.6em' }}>Nome:</label>
              <input className="form-control" type="text" name="nome" value={this.state.value} 
                onChange={this.handleChange} />
            </div>

             <div className="form-group">
              <label style={{ fontSize: '0.6em' }}>Sobrenome:</label>
              <input className="form-control" type="text" name="sobrenome" value={this.state.value} 
                onChange={this.handleChange} />
            </div>

             <div className="form-group">
              <label style={{ fontSize: '0.6em' }}>Linguagem Favorita:</label>
              <select className="form-control" name="linguagemFavorita" value={this.state.value} 
                onChange={this.handleChange}>
                <option>Todas</option>
                <option>As</option>
                <option>Linguagens</option>  
                <option>São</option>  
                <option>Boas</option>  
                <option>👍</option>
                <option>Javascript</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}