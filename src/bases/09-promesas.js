import {getHeroeById} from './08-import-export';
/* const promesa = new Promise( (resolve, reject ) => {
	setTimeout(() => {
		const p1 = getHeroeById(2);
		resolve(p1);
	}, 2000);
});

promesa.then( ( heroe ) => {
	console.log('heroe', heroe);
})
.catch( err => console.warn( err )); */

export const getHeroeByIdAsync = ( id ) => {

	return new Promise( (resolve, reject ) => {
		setTimeout(() => {
			const p1 = getHeroeById(id);
			if (p1){
				resolve(p1);
			}else{
				reject('No se encontró el id');
			}
		}, 1500);
	});
}
