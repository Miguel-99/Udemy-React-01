
const persona = {
	nombre: 'Tony',
	edad: 45,
	direccion: {
		ciudad: 'New York',
		zip: 55321321,
		lat: 14.33322,
		lng: 34.12312,
	}
};

//console.table( persona );
//muestra los datos del objeto en formato de tabla

console.log( persona )

const persona2 = {...persona}; //operador SPREAD ...
