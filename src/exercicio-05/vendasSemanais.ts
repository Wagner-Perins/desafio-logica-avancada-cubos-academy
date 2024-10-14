function solucao(vendasDiarias: number[]) {
  // seu código aqui
  
  let vendasSemana = 0;

  for(let i = 0; i < vendasDiarias.length; i++){
    vendasSemana += vendasDiarias[i]
  };
  
  return vendasSemana;

}
export default solucao;
