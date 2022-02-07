function Localizar(textoHistoria, textoBusca, inicio) {
  // Colocando textos em minúsculo para eliminar problema de caixa
  textoHistoria = textoHistoria.toLowerCase()
  textoBusca = textoBusca.toLowerCase()
  var resultado = textoHistoria.indexOf(textoBusca, inicio)
  if (resultado == -1)
      alert("Não foi encontrado")
  else
      alert("Encontrado na posição " + resultado)
  return (resultado)
}

function contaPalavras(textoHistoria, textoBusca) {
  // Colocando textos em minúsculo para eliminar problema de caixa
  textoHistoria = textoHistoria.toLowerCase()
  textoBusca = textoBusca.toLowerCase()

var encontradas=0
var inicio=0

do {
  var posicao=textoHistoria.indexOf(textoBusca, inicio)
  
  if(posicao!==-1)
  {
    encontradas++
    inicio=posicao+1
  }
} while(posicao!==-1)
  
if (encontradas==0)
      alert("Palavra não foi encontrada")
  else
      alert("Encontradas " + encontradas + " palavras no texto")

  return (encontradas)
}
