// salvar como avatar2.js
function TrocarImagem(titulo, nomeGuerreira)
{
	// criar um objeto que referencia a imagem grande
	var objImgGrande = document.getElementById("imgGuerreira")
	var objNomeGrande = document.getElementById("nomeGuerreira")
	
	objImgGrande.src = "imgs/" + nomeGuerreira
	objNomeGrande.innerHTML = titulo
}

	
	