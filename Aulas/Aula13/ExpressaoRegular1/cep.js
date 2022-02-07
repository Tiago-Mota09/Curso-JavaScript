/* salvar como cep.js*/
function validaCEP(objCEP){
	var expressao = /^[0-9]{5}-[0-9]{3}/
	var cep=objCEP.value
	
	if(expressao.test(cep)){
		objCEP.setCustomValidity("")
		alert("CEP Válido.")
		return (true)
	}
	else{
		objCEP.setCustomValidity("Inválido")
		alert("CEP Inválido.")
		return (false)
	}
}
