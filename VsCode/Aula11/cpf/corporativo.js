// salvar como corporativo.js
function Validacao () {
	var ret=false
	
	if(cpf.value!=""){
		ret = ValidaCPF(cpf.value)
	}
	
	if(ret){
		// CPF válido
		resultado.innerHTML="<img src='cpf/imgs/ok.png'>"
	}
	else{
		// CPF Inválido
		resultado.innerHTML="<img src='cpf/imgs/erro.png'>"
		cpf.className="caixa"
	}
}
//==================================================================================
function ValidaCPF(textoCPF){
	var ret = false
	
	//alert(textoCPF)
	if(textoCPF){
    //123.456.789-09 transformará isso... ==> 14
    //"12345678909" ...nisso... ==> 11
    var cpfNumero = ""
    var tamanho = textoCPF.length

    for(var n=0; n<tamanho; n++){
      var caractere = textoCPF.substr(n,1)// da posição n e pegando um caractere
      console.log(caractere)
      if((caractere >= "0") && caractere <="9"){
          cpfNumero = cpfNumero + caractere
          // ou cpfNumero += caractere
      }
    }
    console.log("textoCPF = " + textoCPF + " e cpfNumero = " + cpfNumero )

		if(cpfNumero.length==11){
			// continuando a validação se tiver validação
			var cpfBase = cpfNumero.substr(0,9)
			console.log("cpfBase = " + cpfBase)
      //  1   2   3   4   5   6   7   8   9
      //x10   9   8   7   6   5   4   3   2 
      //==== === === === === === === === ===
      // 20  +18 +24 +28 +30 +30 +28 +24 +18  => soma

      soma = 0 // acumulador já inicializado
      var multiplicador = 10

      tamanho = cpfBase.length
//==================================================================================
		  // acessa todos os caracteres da (string) cpfBase 
			//   caractere1 = cpfBase.substr(0,1)
			//   caractere2 = cpfBase.substr(1,1)
			//   caractere3 = cpfBase.substr(2,1)
			//   caractere4 = cpfBase.substr(3,1)
			//   caractere5 = cpfBase.substr(4,1)
			//   caractere6 = cpfBase.substr(5,1)
			//   caractere7 = cpfBase.substr(6,1)
			//   caractere8 = cpfBase.substr(7,1)
			//   caractere9 = cpfBase.substr(8,1)
			
		  // soma =(parseInt(caractere1)*10 ) +
			// 		  (parseInt(caractere2)*9 )  +
			// 		  (parseInt(caractere3)*8 )  +
			// 		  (parseInt(caractere4)*7 )  +
			// 		  (parseInt(caractere5)*6 )  +
			// 		  (parseInt(caractere6)*5 )  +
			// 		  (parseInt(caractere7)*4 )  +
			// 		  (parseInt(caractere8)*3 )  +
			// 		  (parseInt(caractere9)*2 ) 
//==================================================================================
      //CALCUMAMOS O 1º DIGITO CALCULADOR
      soma=0 // acumulador já inicializado
			var multiplicador = 10
			
			tamanho = cpfBase.length 
			//   1  2  3  4  5  6  7  8  9
			// x10  9  8  7  6  5  4  3  2
			
			for(var n=0; n<tamanho; n++) {
				var digito = parseInt(cpfBase.substr(n,1))
				var calculoDigito = digito * multiplicador
				console.log(digito + " x " + multiplicador + " = " + calculoDigito)
				
				soma = soma +calculoDigito
				// igual a soma+=calculoDigito
				
				multiplicador-- // decrementar o multiplicador
			}
			console.log("Soma = " + soma)

      //Aplicando o módulo
      var modulo = soma % 11
      console.log("Modulo = " + modulo)
      //1º Digito
      var mod11 = 11 - modulo
			console.log("mod11= " + mod11)
			
			if(mod11 > 9) {
				mod11 = 0
				console.log("mod11= " + mod11)
			}
			var digito1 = mod11
//==================================================================================
      // Calculando o 2o dígito verificador
			soma=0 // acumulador já inicializado
			var multiplicador = 11
			
			tamanho = cpfBase.length 
			//   1   2  3  4  5  6  7  8  9  V1
			// x11  10  9  8  7  6  5  4  3   2 
			
			for(var n=0; n<tamanho; n++) {
				var digito = parseInt(cpfBase.substr(n,1))
				var calculoDigito = digito * multiplicador
				console.log(digito + " x " + multiplicador + " = " + calculoDigito)
				
				soma = soma +calculoDigito
				// igual a soma+=calculoDigito
				
				multiplicador-- // decrementar o multiplicador
			}
			
			// Inserindo na soma o cálculo do 1o dígito verificador
			var calculoDigito = digito1 * 2
			soma = soma +calculoDigito
			
			console.log("Soma 2o dígito = " + soma)
			
			// Passo  - aplicando o módulo
			var modulo = soma % 11
			console.log("Modulo = " + modulo)
			
			// Passo  - 1o dígito
			var mod11 = 11 - modulo
			console.log("mod11= " + mod11)
			
			if(mod11 > 9) {
				mod11 = 0
				console.log("mod11= " + mod11)
			}
			var digito2 = mod11

      //Cálculo finalizado - Compor o CPF calculado
      var cpfCalculado = cpfBase + digito1 + digito2.toString()
                // "12345678909"+  "0"    +  "9"
			
      if(cpfNumero==cpfCalculado){
      // cpf informado é igual ao calculado
      ret = true
      }
    }
  }
return(ret)
}
