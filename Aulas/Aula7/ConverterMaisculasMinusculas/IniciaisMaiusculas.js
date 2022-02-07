// salvar como nomeLegal.js
function nomeMaiusculo(nome) { // RECEBENDO UM PARÂMETRO
	// código da função
	nome = nome.trim() // remove espaços à esquerda e direita do nome
	var tamanho = nome.length  // tamanho (um número) do nome (caracteres)
  var aumentar = true //Deixa o 1º caracter do nome para MAIÙSCULO

  for(var n = 0; n < tamanho ; n++)
    {
      if(aumentar)
      {
        // aumenta (minúsculo p/ maiúsculo)
        var codigoCaractere = nome.charCodeAt(n)
        //alert(codigoCaractere)
        
        if(codigoCaractere>96)
        {
          // está em minúsculo - transformar p/ maiúsculo
          var parteEsquerda = nome.substring(0,n)
          //alert(parteEsquerda)
          var caractereMaiusculo = String.fromCharCode(codigoCaractere - 32)
          //alert(caractereMaiusculo)
          var parteDireita = nome.substring(n+1, tamanho)
          //alert(parteDireita)
          nome = parteEsquerda + caractereMaiusculo + parteDireita
        }
        aumentar = false
      }
      
      if ( nome.charAt(n)== " ")
      {
        // Caractere atual é um espaço
        // O próximo caracter deve ficar em maiúsculo (aumentar)
        aumentar = true
        //alert("encontrei espaço")
      }
    }
    return(nome)
}
//=====================================================================

// MÉTODO = é uma função que pertence a um objeto, que para acioná-lo, basta chamar o objeto
// ARGUMENTO = Valor inserido pelo usuário para uma função na variável (argumento1, [arumento2], [argumanro3]) (o que se manda para a função)
// PARÂMETRO = espaço da memória que recebe o argumento(o que se recebe na função)
