function heroisMC(lista){
	lista=lista.toLowerCase()
	var aHerois= new Array("feiticeira escarlate","capitã marvel","thor","capitão américa","homem de ferro","doutor estranho")
	var acertos=0;
	for(n=0;n<aHerois.length;n++){
		if(lista.includes(aHerois[n]))
			acertos++
	}
	resultado.innerHTML=
	"<hr>Você obteve " + acertos + " acertos!<br>"+
	"Verifique posteriormente<br>"+
	"<a href='https://www.adorocinema.com/noticias/filmes/noticia-157598/'>"+
	"https://www.adorocinema.com/noticias/filmes/noticia-157598/</a>"
}
