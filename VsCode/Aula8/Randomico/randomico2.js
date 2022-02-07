// salvar como randomico2.js
function aleatorio(minimo, maximo) {
	minimo = parseInt(minimo)
	maximo = parseInt(maximo)

  var resultado = Math.random() * (maximo - minimo)

  return (resultado.toFixed(0) )
}
