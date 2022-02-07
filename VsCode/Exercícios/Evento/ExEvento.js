// function Calcular() {
//     var pessoa  = parseFloat(document.getElementById("pes").value)
//     var comida  = parseFloat(document.getElementById("com").value)
//     var bebida  = parseFloat(document.getElementById("beb").value)
//     var locacao = parseFloat(document.getElementById("loc").value)
//     var outros  = parseFloat(document.getElementById("out").value)
//     var total   = parseFloat(document.getElementById("custTotal").value) //explicação dessa linha
    
//     var soma  = (pessoa + comida + bebida + locacao + outros)
//     var total = document.getElementById("custTotal") //explicação dessa linha

//     total.value = soma.toFixed(2) //explicação dessa linha
// }

function Calcular()
{
	// Armazemar na variável o valor do objeto com mesmo id no HTML
	var pessoal = parseFloat(document.getElementById("pes").value)
	var comidas = parseFloat(document.getElementById("com").value)
	var bebidas = parseFloat(document.getElementById("beb").value)
	var locacao = parseFloat(document.getElementById("loc").value)
	var outros  = parseFloat(document.getElementById("out").value)
	
  // alert("Gastos com pessoal = " + pessoa)
	// Lembrando...
	// parseFloat("570.12") --> número com casa decimal
	// parseInt("570.12") --> número inteiro (sem casa decimal)
	// document.write("Valor da despesas de pessoal é: " + pessoal)
	
	// isNaN(variável) = Is not a number ==> não é um número / numérica
	// || => operador lógico OU (OR)
	
	// Validação - todos os números informados?
	if( isNaN(pessoal) || isNaN(comidas) || 
		isNaN(bebidas) || isNaN(locacao) ||
		isNaN(outros) )
	{
		alert("Todos os campos devem ser informados (mesmo com valor 0).")
	}
	else
	{
		// Continuo
		var soma = pessoal + comidas + bebidas + locacao + outros
		//alert("A soma é :" + soma)
		
		// Colocando a soma das despesas na caixa cujo id=total
		var total = document.getElementById("custTotal")
		total.value = soma.toFixed(2)
	}
	
}
