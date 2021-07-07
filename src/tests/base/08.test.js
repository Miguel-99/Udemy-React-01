import { getHeoesByOwner, getHeroeById } from "../../bases/08-import-export";
import heroes from "../../data/heroes";

describe('probando 08-import-export', () => {
	test('probando metodo getHeroeById devuelva un heroe con el id pasado', () => {
		
		const prueba = getHeroeById(1);

		const res = heroes.find( h => h.id === 1);

		expect( prueba ).toBe( res );

	})
	
	test('probando método getHeroeById devuelva undefined para un id que no existe en el arreglo', () => {
		
		const prueba = getHeroeById(999);
		expect( prueba ).toBe( undefined );

	})

	test('probando getHeroeByOwner devuelva el arreglo correcto', () => {
		const prueba = getHeoesByOwner('DC');

		expect( prueba ).toEqual([{id:1,name:'Batman',owner:'DC'}, {id:3,name:'Superman',owner:'DC'}, {id:4,name:'Flash',owner:'DC'}]);
	})
	
	test('probando getHeroeByOwner devuelva el arreglo correcto usando length', () => {
		const prueba = getHeoesByOwner('Marvel');

		expect( prueba.length ).toBe( 2 );
	})
	
})
