function Validar() {
  var expCEP = /^[0-9]{5}-[0-9]{3}/ //ou \d{5}\d{3}
  var expCPF =  /^\d{3}\.\d{3}\.\d{3}[\.\-\/]\d{2}$/ //ou/\d{3}.\d{3}.\d{3}[\.\-\/]\d{2}/
  var expCNPJ = /\d{2}.\d{3}.\d{3}[\/]\d{4}[\.\-]\d{2}/
  var situacao = true // por enquanto seto como válido

  var v_cep = cep.value
  var v_cpf = cpf.value
  var v_cnpj = cnpj.value

  if (expCEP.test(v_cep)) { cep.className="campos"}
  else {
      cep.className="erro"
      situacao = false
  }

  if (expCPF.test(v_cpf)) {cpf.className="campos"}
  else {
      cpf.className="erro"
      situacao = false
  }

  if (expCNPJ.test(v_cnpj)) {cnpj.className="campos"}
  else {
      cnpj.className="erro"
      situacao = false
  }

  if (!situacao) { alert("Existem dados inválidos. Favor informar novamente!") }
  return (situacao)
}

// ^	    procura no começo da String
// \d	    Procura por dígito numérico
// \d{5}	Busca 5 números
// \d{3,5}  De 3 a 5 números
// \d{3,}   Mínimo 3 números
// \d{,5} 	Até 5 números
// \d{5}    Com 5 dígitos
