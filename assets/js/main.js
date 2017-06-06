
//función que permite que al tocar el enlace menú se despliegue mi menú oculto

function despegable(){
	
	var men = document.getElementById("menu");
	//recorrer todos los elementos a 
	var menus = Array.from(document.getElementsByClassName("mostrar"));

	//al clickear el el menú se ejecute la función 
	men.addEventListener("click", function(event){
		
		event.preventDefault();
		
		menus.forEach(function(link) {
			//con toggle me elimina todas las clases hidens (toggle, se puede apretar nuevamente y se esconde)
			link.classList.toggle("hidens");
		})
	});
}

despegable();

    
//al examinar la página muestra cambio de ltra y que desparece el menú principal pero no aparece el menú despegable
