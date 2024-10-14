function solucao(pontosAcumulados: number, valorCompra: number) {
  // seu código aqui

  let valorDesconto = 0;
  if(pontosAcumulados >= 100&& pontosAcumulados <= 500){
    valorDesconto = 0.1
  } else if (pontosAcumulados > 500){
    valorDesconto = 0.2
  };

  const total = valorCompra - (valorDesconto * valorCompra);

  return total;

}
export default solucao;
