function Dados()
{
	var objLista = document.getElementById("listaFrutas")
	
	
	var itens = objLista.length // É o tamanho da lista (número de opções)
	//alert(itens)
	
	var tipo = objLista.type // É o tipo da lista
	// alert(tipo)
	
	var posItemAtual = objLista.selectedIndex // É o item atualmente selecionado
	// alert(posItemAtual)
	
	var itemAtual = objLista.options[posItemAtual] // Pegando a opção selecionada
	var texto = itemAtual.text // Texto do item atual
	// alert(texto)
	var valor = itemAtual.value // Valor do item atual
	// alert(valor)
	
	var objDivResultado = document.getElementById("resultado")
	objDivResultado.innerHTML = "Tamanho da lista: <b>" + itens + "</b><br>" +
								"Tipo: <b>" + tipo + "</b><br>" +
								"Posição do item atual na lista: <b>" + (posItemAtual+1) + "</b><br>" +
								"Texto do item atual: <b>" + texto + "</b><br>" +
								"Valor do item atual: <b>" + valor
}


