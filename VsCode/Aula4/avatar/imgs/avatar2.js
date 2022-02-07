// salvar como avatar2.js
function TrocarImagem(titulo, nomeArqImagemGrande)
{
	// criar um objeto que referencia a imagem grande
	var objImgGrande = document.getElementById("imgGrande")
	
	objImgGrande.src = "../imgs/" + nomeArqImagemGrande
  objImgGrande.titulo = titulo
}
