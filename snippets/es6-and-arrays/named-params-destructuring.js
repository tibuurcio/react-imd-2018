function getNome(data) {
  return data.nome + ' ' + data.sobrenome;
}

function getNome({ nome, sobrenome }) {
  return nome + ' ' + sobrenome;
}
