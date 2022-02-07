// matriz2.js

aFolhas=Array()

function InserirFolha(txtNome, txtSalario,txtSetor, txtCargo){
	//alert(txtNome + " - " + txtSalario + " - " + txtSetor)
	
	aDados= [txtNome, txtSalario, txtSetor, txtCargo]
	
	aFolhas.push(aDados) 
	calculaFolha()
}

function calculaFolha(){
	var linhas=aFolhas.length
	areaTotFuncs.innerHTML = linhas
	
	var totFolha=0
	for(n=0; n<linhas;n++){
		totFolha += parseFloat(aFolhas[n][1])
	}
	areaTotFolha.innerHTML = totFolha.toFixed(2)
}

function listarFolha(){
	txtTabela  = "<hr>"
	txtTabela += "<table border='1'>"
	txtTabela += "	<tr bgcolor='pink'>"
	txtTabela += "		<th>Nome</th>"
	txtTabela += "		<th>Cargo</th>"
	txtTabela += "		<th>Salário</th>"
	txtTabela += "		<th>Setor</th>"
	txtTabela += "		<th>Ação</th>"
	txtTabela += "	</tr>"
	
	var totFolha=0	
	for(var n=0; n<aFolhas.length; n++){
		txtTabela +="<tr>"
		txtTabela +="	<td>" + aFolhas[n][0] + "</td>" // nome
		txtTabela +="	<td>" + aFolhas[n][3] + "</td>" // cargo
		txtTabela +="	<td>" + aFolhas[n][1] + "</td>" // salário
		txtTabela +="	<td>" + aFolhas[n][2] + "</td>" // setor
		txtTabela +="	<td> <span class='link' onclick='excluir(" + n + ")'>Excluir</span></td>"
		txtTabela +="</tr>"
		totFolha += parseFloat(aFolhas[n][1])
	}
	
	txtTabela +="</table>"
	txtTabela +="<br><br>"
	txtTabela +="Total da Folha: "
	txtTabela += totFolha.toFixed(2)
	
	// alert(txtTabela)
	areaFolha.innerHTML = txtTabela
}

function excluir(item){
	// objetivo: eliminar este item de aFolhas
	if(item <aFolhas.length){
		aFolhas.splice(item,1)
	}
	
	listarFolha() // atualizar a listagem na tela
}
