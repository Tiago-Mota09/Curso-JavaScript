// salvar como DOM-p3.js
function TrocarTexto(oCaixaTexto)
{
	//alert(oCaixaTexto.value)
	var textoDigitado = oCaixaTexto.value
	
	// Criar uma referência ao objeto parágrafo
	var oParagrafo = document.getElementById("p1")
	
	// Troca a propriedade innerHTML do paragrafo pelo texto digitado na caixa
	oParagrafo.innerHTML = textoDigitado
}
