const fecha_max = new Date(2023, 6, 10);

var pagado = 0;
var audio = new Audio('Sounds/good.mp3');


var btn_5 = document.getElementById('btn_5');
btn_5.addEventListener('click', (e) =>{
	actualizar(5);
	musica();
})

var btn_25 = document.getElementById('btn_25');
btn_25.addEventListener('click', (e) =>{
	actualizar(25);
	musica();
})

var btn_50 = document.getElementById('btn_50');
btn_50.addEventListener('click', (e) =>{
	actualizar(50);
	musica();
})

function actualizar(dinero){
	pagado = dinero + parseInt(document.cookie.split('=')[1]);
	document.cookie = "dinero=" + pagado + "; expires:" + fecha_max + ";";
	console.log(document.cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(document.cookie.split('=')[1]));
}

function musica(){
	audio.play();
}

var p_5 = document.getElementById('p_5');
var info_5 = document.getElementById('info_5');
info_5.addEventListener('click', (e) =>{
	if(p_5.style.display == "none"){
		p_5.style.display = "flex"
	} else{
		p_5.style.display = "none"
	}
})

var p_25 = document.getElementById('p_25');
var info_25 = document.getElementById('info_25');
info_25.addEventListener('click', (e) =>{
	if(p_25.style.display == "none"){
		p_25.style.display = "flex"
	} else{
		p_25.style.display = "none"
	}
})

var p_50 = document.getElementById('p_50');
var info_50 = document.getElementById('info_50');
info_50.addEventListener('click', (e) =>{
	if(p_50.style.display == "none"){
		p_50.style.display = "flex"
	} else{
		p_50.style.display = "none"
	}
})
