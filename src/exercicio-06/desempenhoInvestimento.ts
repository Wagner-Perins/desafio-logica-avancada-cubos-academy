function solucao(resultados: number[]) {
  // seu código aqui

  let lucro = 0;
  let prejuizo = 0;

  for(let i = 0; i < resultados.length; i++){
    if(resultados[i] > 0){
      lucro++
    } else if(resultados[i] < 0){
      prejuizo++
    }
  };

  if(lucro > prejuizo){
    return 'POSITIVO'
  } else if(prejuizo > lucro){
    return 'NEGATIVO'
  } else {
    return 'NEUTRO'
  };

}
export default solucao;
