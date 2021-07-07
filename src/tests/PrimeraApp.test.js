import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('tests en componente PrimeraApp', () => {
/* 	test('should return "Hola, soy Goku"', () => {
		const saludo = 'Hola, soy Goku';
		const { getByText }= render( <PrimeraApp saludo={saludo} />);
 		expect( getByText( saludo + "!!" ) ).toBeInTheDocument();
	 }) */

	 test('debe mostrar componente <PrimeraApp /> correctamente', () => {
		const saludo = 'Hola, soy Goku';
		const wrapper = shallow(<PrimeraApp saludo={saludo} /> );

		expect( wrapper ).toMatchSnapshot();
	 });

	 test('debe mostrar subtitulo enviado por props', () => {
		const saludo = 'Hola, soy Goku';
		const sub = 'Soy un subtitulo';

		const wrapper = shallow(
			<PrimeraApp 
				saludo={saludo} 
				despedida={ sub } 
			/> 
		);

		const textoParrafo = wrapper.find('p').text();

		expect( textoParrafo ).toBe( sub );
	 })
	 
	 
	
})
