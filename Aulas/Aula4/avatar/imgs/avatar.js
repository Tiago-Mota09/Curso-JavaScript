// salvar como avatar.js
function TrocarImagem(oImagem)
{
	var arquivoImagem = oImagem.src
	var titulo 		  = oImagem.title
	
	// criar um objeto que referencia a imagem grande
	var objImgGrande = document.getElementById("imgGrande")
	
	objImgGrande.src   = arquivoImagem
	objImgGrande.title = titulo
	
}
