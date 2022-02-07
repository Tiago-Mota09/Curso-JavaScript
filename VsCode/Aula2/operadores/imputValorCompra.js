function Calcular()
{
	// acessar o objeto identificado (id) como qt na página
	// acessar o valor (value) deste objeto
	
	// Criado objeto chamado obj que está vinculado 
	// à caixa de número chamada qt da página
	var obj = document.getElementById("qt")
	
	// pegando a quantidade do objeto (value) e 
	// convertendo para um número inteiro
	var qtd = parseInt(obj.value)
	
	// ou pode ser feito assim:
	// var qtd = document.getElementById("qt").value
	
	// Será que a pessoa digitou um valor válido?
	// Que está entre 1 e 99
	
	// operadores lógicos
	// AND (E) 		- &
	// OR  (OU) 	- ||
	// NOT (NÃO) 	- !
	
	if ( (qtd < 1) || (qtd > 99) )
	{
		alert("Valor informado é inválido. Deve ser entre 1 e 99.")
	}
	else
	{
		var total = qtd * 25.14
		// Criando um objeto no JS para vincular com
		// a caixa de número chamada tot
		var obTot = document.getElementById("tot")
		
		// Acessando a caixinha do número (value) e 
		// colocando, dentro dela, o cálculo feito (total)
		obTot.value = total.toFixed(2)
	}
}