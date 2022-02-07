function Imc(){
  // Armazemar na variável o valor do objeto com mesmo id no HTML
	var peso = parseFloat(document.getElementById("pes").value)
	var altura = parseFloat(document.getElementById("alt").value)
		
if( isNaN(peso) || isNaN(altura))
{
  alert("Todos os campos devem ser informados.")
}
else
{
    var imc = peso / (altura * altura);
		
		var total = document.getElementById("imc")
		total.value = imc.toFixed(2)
    total.style.color = "red"

		var situacao = document.getElementById("sit")
    
    situacao.style.color = "red"
   
  if(imc < 18.5)
  {
   situacao.value = ("Você está abaixo do peso")
  } 
  else if(imc >18.5 && imc <= 25)
  {
    situacao.value = ("Peso Ideal");
  }
  else if(imc >25 && imc <= 30)
  {
    situacao.value = ("Sobrepeso");
  }
  else if(imc >30 && imc <= 35)
  {
    situacao.value = ("Obesidade Moderada")
  }
  else if(imc >35 && imc <= 40)
  {
    situacao.value = ("Obesidade Severa")
  }
  else
  {
    situacao.value = ("Obesidade Morbida")
  }
 }
}




