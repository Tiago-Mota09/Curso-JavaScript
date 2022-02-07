function concatenar(nome, cargo, salario){
	var texto=nome.concat(" deseja trabalhar como ",
							cargo,
							" e ganhar R$ ",
							parseFloat(salario).toFixed(2)
						)
	resultado.innerHTML = texto
}
