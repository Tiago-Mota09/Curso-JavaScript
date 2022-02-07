function Formata(oCEP) {
  var texto=oCEP.value
var resultado = texto.replace( /\D/g , "")
resultado = resultado.replace( /^(\d{5})(\d)/, "$1-$2")
oCEP.value=resultado
}
