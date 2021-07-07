import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";


describe('Pruebas con promesas', () => {
	test('debe retornar un heroe async', done => {

		const id = 1;
		
		getHeroeByIdAsync( id )
			.then( heroe => {
				expect( heroe ).toBe( heroes[0] );
				done();
			}).catch( error => {
				console.log(error);
				done(error);
			}) 

	});

	test('debe retornas un msj de heroe no encontrado', done => {
		const id = 999;
		getHeroeByIdAsync( id )
			.catch( error => {
				expect( error ).toBe( 'No se encontró el id' );
				done();
			} );
	});
	
	
	
});
