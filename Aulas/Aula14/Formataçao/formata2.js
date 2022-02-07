function FormataCPF(oCPF) {
  // variável será usada para compor o valor final do campo
  var buffer = ""
var texto=oCPF.value

  for (var n = 0; n < texto.length; n++) {
      // varrendo a string. Vou pegar todos os caracteres

      // pegando 1 caractere na posição n
      var c = texto.substr(n, 1)

      // é caractere? então jogo no buffer
      if ((c >= "0") && (c <= "9")) {
          // caractere válido - insiro no buffer
          buffer += c
      }
  }
  // Meu buffer agora só tem números. Precisa inserir pontos nas posições 4 e 8 e traço na posição 12
  // Será feito aos poucos, conforme o tamanho do cpf  digitado

  var tamanho = buffer.length
  if (tamanho >= 9) {
      // 99999999999 - aplico formato 999.999.999-99. Caso string seja menor não há problemas.
      buffer = buffer.substr(0, 3) + "." +
          buffer.substr(3, 3) + "." +
          buffer.substr(6, 3) + "-" +
          buffer.substr(9, 2)

  } else if (tamanho >= 6) {
      buffer = buffer.substr(0, 3) + "." +
          buffer.substr(3, 3) + "." +
          buffer.substr(6, 3)
  } else if (tamanho >= 3) {
      buffer = buffer.substr(0, 3) + "." +
          buffer.substr(3, 2)
  }
  // Colocando o texto formatado de volta na caixa do CPF
  oCPF.value = buffer
}



function FormataCPF2(oCPF) {
  // retira espaços à esquerda e direita
  var texto = oCPF.value

  buffer = buffer.replace(/(\d{3})(\d)/, "$1.$2")

  // variável será usada para compor o valor final do campo
  var buffer = ""

  for (var n = 0; n < texto.length; n++) {
      // varrendo a string. Vou pegar todos os caracteres

      // pegando 1 caractere na posição n
      var c = texto.substr(n, 1)

      // é caractere? então jogo no buffer
      if ((c >= "0") && (c <= "9")) {
          // caractere válido - insiro no buffer
          buffer += c
      }
  }
  // Meu buffer agora só tem números
  // Agora insiro os pontos e traços cf o tamanho do buffer
  // 999.999.999-99
  // 12345678901234
  // pontos nas posições 4 e 8 e traço na posição 12

  // faremos aos poucos, conforme o tamanho do cpf  digitado

  var tamanho = buffer.length
  if (tamanho > 9) {
      buffer = buffer.replace(/(\d{3})(\d)/, "$1.$2")
  }


  // Compararo se o buffer está diferente do digitado
  // Se estiver diferente, troco o value pelo buffer
  if (texto != buffer)
      oCPF.value = buffer
}
