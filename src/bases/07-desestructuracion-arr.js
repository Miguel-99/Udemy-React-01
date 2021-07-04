const personajes = ['Goku', 'Vegeta', 'Trunks' ];

const [goku] = personajes;

console.log( goku );

const retornaArreglo = () => {
	return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo(); //desestructuracion con arreglos 

console.log(letras, numeros);

const userState = (valor) => {
	return [ valor, () => { console.log('Hola Mundo')}];
}

/* const arr = userState( 'Goku' ); */
const [nombre, setNombre]= userState( 'Goku' );
setNombre();
console.log(nombre);