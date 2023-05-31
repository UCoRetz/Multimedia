
var btn = document.getElementById("hamburguesa")
var menu = document.getElementById("menu")

btn.addEventListener('click', (e) =>{
	if (menu.style.display == "none"){
		menu.style.display = "flex"
	} else{
		menu.style.display = "none"
	}

});


