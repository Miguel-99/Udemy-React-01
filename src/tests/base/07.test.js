import { retornaArreglo } from "../../bases/07-desestructuracion-arr";

describe('probando 07-desestructuracion-arr', () => {
	test('probando método retornaArreglo', () => {
		const test = retornaArreglo();
		const result = ['ABC', 123];
	expect( test ).toEqual( result );
	expect( typeof test[0]).toBe( 'string');
	expect( typeof test[1]).toBe( 'number');

	})
	
})

