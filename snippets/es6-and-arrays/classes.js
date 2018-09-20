class Pessoa {
  constructor(nome, sobrenome = '') {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Gabriel', 'Tibúrcio');
pessoa.getNomeCompleto(); // 'Gabriel Tibúrcio'
