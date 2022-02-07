function formataMoeda(valor){
	valor = parseFloat(valor)
	//Exemplo
  //"15370.20" => "R$ 15.370,20"
	var valorFormatado = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(valor)
	return (valorFormatado)
}
