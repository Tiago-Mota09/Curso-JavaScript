// salvar como DOM-p8.js
function areaEmail(checado) {
	
	area = document.getElementById("areaEmail")
	
	if(checado){
		// mostrar a área de email
		area.style.display="block"
	}
	else {
		// esconder a área de email
		area.style.display="none"
		document.getElementById("email").value=""
	}
}
