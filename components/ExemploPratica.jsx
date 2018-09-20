import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

class ExemploPratica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carregando: false,
      nome: '',
      cnes: '',
      estado: {
        options: [],
        selecionado: ''
      },
      municipio: {
        options: [],
        selecionado: ''
      }
    };
  }

  componentDidMount() {
    this.requisitarDados('estado', '3469034');
  }

  handleInput(value, name) {
    this.setState(state => {
      return update(state, { [name]: { $set: value } });
    });
  }

  handleChange(value, name) {
    console.log(value, name);
    this.setState(state => {
      return update(state, {
        [name]: {
          selecionado: {
            $set: value
          }
        }
      });
    });

    if (name === 'estado') {
      this.requisitarDados('municipio', value);
    }
  }

  requisitarDados(name, geonameId) {
    this.setState({ carregando: true });
    axios
      .get(`https://www.geonames.org/childrenJSON?geonameId=${geonameId}`)
      .then(res => {
        this.setState(state => {
          return update(state, {
            [name]: {
              options: {
                $set: res.data.geonames.map(g => ({ nome: g.name, geonameId: g.geonameId }))
              }
            },
            carregando: { $set: false }
          });
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div style={{ width: '50vw' }}>
        <div className="card">
          <h4 className="card-header" style={{ color: 'black' }}>
            {this.state.carregando ? 'Carregando...' : 'Selecione o município'}
          </h4>
          <div className="card-body">
            <div className="row mb-4">
              <div className="col">
                <input
                  name="nome"
                  className="form-control"
                  placeholder="Nome"
                  value={this.state.nome}
                  onChange={({ target }) => this.handleInput(target.value, target.name)}
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  name="cnes"
                  placeholder="CNES"
                  value={this.state.cnes}
                  onChange={({ target }) => this.handleInput(target.value, target.name)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <select
                    className="form-control"
                    name="estado"
                    value={this.state.estado.selecionado}
                    onChange={e => this.handleChange(e.target.value, e.target.name)}>
                    <option value="">Selecione o estado</option>
                    {this.state.estado.options.map(estado => (
                      <option key={estado.geonameId} value={estado.geonameId}>
                        {estado.nome}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <select
                    className="form-control"
                    name="municipio"
                    value={this.state.municipio.selecionado}
                    onChange={e => this.handleChange(e.target.value, e.target.name)}>
                    <option value="">Selecione o município</option>
                    {this.state.municipio.options.map(municipio => (
                      <option key={municipio.geonameId} value={municipio.geonameId}>
                        {municipio.nome}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col">
                <button type="button" className="btn btn-block btn-success">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExemploPratica;
