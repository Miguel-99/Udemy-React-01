
const nombre = "Miguel";
const apellido = "CondorĂ­";

const nombreCompleto = ` Hola ${nombre}`;
/* console.log( nombreCompleto); */

export function getSaludo(nombre = "Carlos"){
	return `Hola ${nombre}`;
}
/* console.log(`Este es un texto ${getSaludo(apellido)}`) */