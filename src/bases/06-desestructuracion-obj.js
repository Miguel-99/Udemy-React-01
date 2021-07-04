const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman',
};

/* const { nombre, edad, clave} = persona; */

const userContext = ({clave, nombre, edad, rango}) =>{
	return {
		nombreClave: clave,
		anios: edad,
	}
};
const {nombreClave, anios } = userContext( persona );
console.log( nombreClave, anios );