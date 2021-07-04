//const saludar = function ( nombre ){
//	return `Hola, ${ nombre }`;
//}
//de esta manera si se reasigna el nombre "saludo", avisará con un error
//en  vez de permitir el cambio

//console.log(saludar);

//funcion flecha con lambda
//const saludar2 = (nombre) => {
//	return `Hola, ${ nombre }`;
//}

//const saludar3 = (nombre) => `Hola, ${ nombre }`;
//funcion mucho mas resumida
//console.log( saludar2('VegetA'));

const getUser = () =>({
		uid: 'ABC123',
		username: 'usuarioRandom',
});

const user = getUser();
console.log(user);

//Tarea
// 1. Transformen a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
function getUsuarioActivo ( nombre ){
	return {
		uid: 'ABC123',
		username: nombre,
	}
};

const getUsuarioActivo2 = (nombre) => ({uid: 'ABC123', username:nombre,});

const usuarioActivo = getUsuarioActivo('Miguel');
console.log( usuarioActivo );
console.log( getUsuarioActivo2('Mauro'));w
