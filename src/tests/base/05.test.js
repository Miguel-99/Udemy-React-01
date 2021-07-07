import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe('testeando 05-funciones', () => {
	test('probando método getUser', () => {
		const UserTest = {
			uid: 'ABC123',
			username: 'usuarioRandom'
		}

		const user = getUser();

		expect( user ).toEqual( UserTest );
	});

	test('probando método getUsuarioActivo', () => {
		const UsuarioActivo = {
			uid: 'ABC123',
			username: 'miguel'
		}

		const usuario = getUsuarioActivo('miguel');

		expect( usuario ).toEqual( UsuarioActivo );
	})
})