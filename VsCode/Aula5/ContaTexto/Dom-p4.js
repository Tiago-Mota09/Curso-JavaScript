// function Tamanho(oAreaTexto)
// {
// 	alert(oAreaTexto.value.length)
// }
// function Tamanho()
// {
//   var objAreaTexto = document.getElementById("obs")
//   var texto = objAreaTexto.value
//   var tamanho = texto.length
// }

// function Tamanho(objAreaTexto)
// {
//   var texto = oAreaTexto.value
//   var tamanho = texto.length
//   var oSpan = document.getElementById("contagem")
//   alert(oAreaTexto.value)
// }

// salvar como DOM-p4.js
// salvar como DOM-p4.js
function Tamanho(oAreaTexto)
{
	var caracteresDigitados = oAreaTexto.value.length
	
	// Verificando se estourou os 200 caracteres e ajustando a área de texto
	if(caracteresDigitados>200)
	{
		var textoLimitado = oAreaTexto.value.substring(0,200)
		//alert(textoLimitado)
		oAreaTexto.value = textoLimitado
		caracteresDigitados = 200
	}
	
	var caracteresRestantes = 200 - caracteresDigitados
// Criando uma referência ao objeto span
	var oSpan = document.getElementById("contagem")
	oSpan.innerHTML = caracteresRestantes
}


