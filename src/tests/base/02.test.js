import '@testing-library/jest-dom';
import { getSaludo } from "../../bases/02-.template-strings";


describe('probando 02-template-strings', () => {
	test('probando método getSaludo', () => {
		const nombre = "miguel";
		
		const saludo = getSaludo( nombre );
		expect( saludo ).toBe( "Hola " + nombre);
	})
		
	test('probando el valor default del método getSaludo sin argumentos', () => {
		const saludo = getSaludo();
		expect( saludo ).toBe( "Hola Carlos");
		
	})
	
})