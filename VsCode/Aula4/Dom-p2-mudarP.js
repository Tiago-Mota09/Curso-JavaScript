// salvar como DOM-p2.js
function Clicado(oParagrafo)
{
	var conteudo = oParagrafo.innerHTML
	
	// Criando algumas variáveis com textos
	var t1= "A raposa descansava  à beira da lagoa quando escutou o latido de cães."
	var t2= "A raposa saiu correndo."
	var t3= "A raposa se escondeu na toca."
	var t4= "Os cães passaram batido por ela."
	var t5= "A raposa saiu da toca e voltou a dormir."
	
	if(conteudo == t1) { oParagrafo.innerHTML = t2 }
  if(conteudo == t2) { oParagrafo.innerHTML = t3 }
	if(conteudo == t3) { oParagrafo.innerHTML = t4 }
	if(conteudo == t4) { oParagrafo.innerHTML = t5 }
	if(conteudo == t5) { oParagrafo.innerHTML = t1 }
}
