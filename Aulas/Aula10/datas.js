 // Salvar como datas.js
 function MostraData ( d ) {
  document.write("<br>")
  document.write(d)
  document.write("<br>")
}

function Mes ( objData ) {

   var aMeses=Array( 
    "Janeiro", 
    "Fevereiro", 
    "Março", 
    "Abril", 
    "Maio", 
    "Junho",
    "Julho", 
    "Agosto", 
    "Setembro", 
    "Outubro", 
    "Novembro", 
    "Dezembro")
   var numeroMes = objData.getMonth()

   return(aMeses[numeroMes])
}


function Semana ( objData ) {
  var aSemana=	Array(	"Domingo", 
    "Segunda", 
    "Terça", 
    "Quarta", 
    "Quinta",
    "Sexta",
    "Sábado")

  var numeroDiaSemana = objData.getDay()

  return(aSemana[numeroDiaSemana])
}

function SomaDias ( objData, numDias ) {

  objData.setDate(objData.getDate() + numDias)

   return(objData)
}

function SubtraiDias ( objData, numDias ) {

  objData.setDate(objData.getDate() - numDias)

   return(objData)
}

function Hoje (numDias) {
  // função retorna uma determinada data 
  // num string no formato YYYY-MM-DD
  var hoje = new Date()

  // É para aumentar a data?
  if(numDias > 0) {
 hoje.setDate(hoje.getDate() + numDias)
  }

  // Pegar o dia - e transformar em String (é número)
  // e preencher com 0 à esquerda - 2 dígitos
  var dia = hoje.getDate().toString().padStart(2,'0')

  // Pegar o mês
  var mes = (hoje.getMonth() + 1).toString().padStart(2,'0')
  var ano = hoje.getFullYear()

  // Monta o string de retorno no formato "YYYY-MM-DD"
  var stringData = ano + "-" +  mes + "-" + dia

  return(stringData)
}
