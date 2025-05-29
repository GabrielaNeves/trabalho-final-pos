function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
  if(idade > 1){
    return true
  }else if(porte == "M"){
    return true
  }
  else{
    return false
  }
}

function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300
}

function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: "brincar dentro de casa",
    medio: "caminhada no quarteirão",
    grande: "correr no parque"
  };
  return atividades[porte] || "porte inválido";
}

async function buscarDadoAsync() {
  return 'Pipoca';
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};