
var btn = document.getElementById("hamburguesa")
var menu = document.getElementById("menu")

btn.addEventListener('click', (e) =>{
	if (menu.style.display == "none"){
		menu.style.display = "grid"
	} else{
		menu.style.display = "none"
	}

});

window.addEventListener('resize', () => {

  if (window.innerWidth > 850) {
    menu.style.display = "flex";
  } else{
  	menu.style.display = "none"
  }
});


