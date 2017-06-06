function despegable(){
	//se llama menu que está con display none en css, en media pasa a ser display inline-block.
	var men = document.getElementById("menux");
	//se llama clase de todos mis a para recorrerlo por eso está el array.from
	var menus = Array.from(document.getElementsByClassName("mostrar"));

	//le creo un escuchador
	men.addEventListener("click", function(event){
		//esto es para que no salte la pagina
		event.preventDefault();
		//y aquí me recorre todas mi a con clase mostrar
		menus.forEach(function(link) {
			//con toggle me elimina todas las clases hidens (toggle, se puede apretar nuevamente y se esconde)
			link.classList.toggle("hidens");
		})
	});
}

despegable();

    

