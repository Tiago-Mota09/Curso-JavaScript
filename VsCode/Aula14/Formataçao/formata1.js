function Formata(oCEP) {
  // variável temporária buffer será usada para compor o valor final do campo
  var buffer = ""
  var texto=oCEP.value
  for (var n = 0; n < texto.length; n++) {
      // varrendo a string. Vou pegar todos os caracteres e deixar apenas os números

      // pegando 1 caractere na posição n
      var c = texto.substr(n, 1)

      // o caractere é número?
      if ((c >= "0") && (c <= "9")) {
          // é número - insiro no buffer
          buffer += c
      }
  }

  // neste momento, a variável buffer contém apenas números (do cep)
  // se seu tamanho for maior que 5, então é preciso colocar o ponto na 6a posição

  if (buffer.length > 5) {
      buffer = buffer.substr(0, 5) + "-" + buffer.substr(5, 3)
  }
  if (texto != buffer)
      oCEP.value = buffer
}
