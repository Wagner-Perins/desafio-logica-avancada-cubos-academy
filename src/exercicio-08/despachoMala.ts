type TDadosMala = {
  nome: string;
  pesoMala: number;
};

function solucao(dadosPassageiros: TDadosMala[]) {
  // seu código aqui

  const nomesTaxados = [];

  for(let i = 0; i < dadosPassageiros.length; i++){
    if(dadosPassageiros[i].pesoMala > 23){
      nomesTaxados.push(dadosPassageiros[i].nome)
    }
  };

  if(nomesTaxados.length === 0){
    return 'SEM PASSAGEIROS'
  } else{
    return nomesTaxados.join(' - ')
  };


}
export default solucao;
