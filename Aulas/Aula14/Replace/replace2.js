function FormataCell(telefone) {
  texto = telefone.value

  // pegando apenas os números
  texto = texto.replace(/\D/g, "")

  // Colocando os parênteses na frente de tudo
  texto = texto.replace(/^(\d)/, "($1")

  // Pegando os três primeiros caracteres, inserindo um
  // parêntese e um espaço e colocando o resto no texto
  texto = texto.replace(/(.{3})(\d)/, "$1) $2")

  // Neste momento temos o início assim:
  // (99)espaço 

  // O resto vai depender do que foi digitado no campo

  // Opções (conforme o tamanho do campo):
  // (99) até 5 caracteres -> não faz nada

  // se tiver 7 caracteres (99) 99, 
  // coloca o caractere ponto antes do último caractere
  if (texto.length >= 7) {
      texto = texto.replace(/(.{6})(\d)/, "$1.$2")
  }

  // --> (99) 9.
  // se tiver 12 caracteres ->(99) 9.9999, coloca o traço
  // se for maior ou igual a 12 caracteres (99) 9.9999-9 
  // coloca o traço antes do último caractere
  if (texto.length >= 12) {
      texto = texto.replace(/(.{11})(\d)/, "$1-$2")
  }

  // Coloca-se o texto formatado no campo
  celular.value = texto
  return texto;
}
