# Multimedia

Para poner una imagen de fondo:

	En CSS se pone background image, se recomienda poner tambien linear gradient (una especie de filtro oscuro para que se lea mejor)
	Se le puede poner dirección del gradiente, como por ejemplo 0deg y luego los 2 colores del gradiente. Por ejemplo rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5).
	Esto le aplicaria un un filtro oscuro. Hay otras propiedades para hacer lo mismo con filter, pero esta es la mas facil y comprimida que he visto.


	Otras propiedades interesantes:

		background repeat:  no repeat (para que no se repita en plan cortes, lo que hace por defecto)
		background size: cover (para que el no deje huequitos a los lados especialmente)
		background position: center center (para que el texto esté justo en el centro, tanto de altura como de anchura del CONTENIDO de la imagen)

		Ejemplo:

			display: flex;
		    align-items: center;
		    justify-content: center;
		    text-align: center;
		    flex-direction: column;
		    height: 90vh;
		    background-image: linear-gradient(
		        0deg,
		        rgba(0,0,0,0.5),
		        rgba(0,0,0,0.5)
		    )
		    ,url("media/hero.jpg");
		    background-repeat: no-repeat;
		    background-size: cover;
		    background-position: center center;
    
Tamaño fuente:

	Se puede usar un numero (0.5) eso hace que el tamaño cambie respecto al tamaño del font (por ejemplo a la mitad)

Botones

	Funcionamiento del boton

		Para que los botones funcionen y te lleven a otro link, hace falta meterlo en una etiqueta "form"

	Cambio al pasar el cursor por encima

	Se hace en css con "boton:hover{}"" y ahi se pone por ejemplo background color