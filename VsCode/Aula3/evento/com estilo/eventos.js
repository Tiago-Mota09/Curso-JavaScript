// salvar como eventos.js
function Calcular()
{
	// Armazemar na variável o valor do objeto com mesmo id no HTML
	var pessoal = parseFloat(document.getElementById("pessoal").value)
	var comidas = parseFloat(document.getElementById("comidas").value)
	var bebidas = parseFloat(document.getElementById("bebidas").value)
	var locacao = parseFloat(document.getElementById("locacao").value)
	var outros  = parseFloat(document.getElementById("outros").value)
	
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
		var obTot = document.getElementById("total")
		obTot.value=soma.toFixed(2)
		obTot.style.color = "navy"
	}
	
}