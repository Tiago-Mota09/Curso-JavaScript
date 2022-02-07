// salvar como DOM-p6.js

function mudarAcao(objLista){
	// Objetivo: Alterar a ação da raposa que se encontra dentro de um
	// parágrafo, no span identificado como span1

	// Será necessário acessar o objeto Lista de Seleção que está vindo,
	// de forma a recuperar o texto da opção selecionada da lista

	//alert(objLista.selectedIndex)
	
	var posicaoItemAtual = objLista.selectedIndex
	
	var itemAtual = objLista.options[posicaoItemAtual]
	
	var texto = itemAtual.text
	//alert(texto)

  span1.innerHTML = texto

}

function alterarLocal(){
	// Objetivo: Alterar o local onde a raposa se encontra, 
	// no objeto identificado como span2

	// Será necessário acessar a caixa de texto, na qual o (a) usuário (a)
    // digitou o novo local 

	var texto = local.value
	// alert(texto)	
	span2.innerHTML = texto
}

function reacaoRaposa(texto){
  span3.innerHTML = texto
}


