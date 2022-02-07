// matriz1.js

aFolhas=Array()

function InserirFolha(txtNome, txtSalario,txtSetor){
	//alert(txtNome + " - " + txtSalario + " - " + txtSetor)
	
	aDados= [txtNome, txtSalario, txtSetor]
	
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

function InserirFolha(txtNome, txtSalario,txtSetor, txtCargo){
	aDados= [txtNome, txtSalario, txtSetor, txtCargo]
}
