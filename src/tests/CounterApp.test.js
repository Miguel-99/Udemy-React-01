import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import '@testing-library/jest-dom';

describe('tests en componente CounterApp', () => {

	const wrapper = shallow( <CounterApp valor={ 10 }/>);

	test('debe mostrar el comp correctamente', () => {
		expect( wrapper ).toMatchSnapshot();
	})
	

	test('debe mostrar el comp con el argumento "100" correctamente', () => {

		const valor = 100;
		const wrapper = shallow(
			<CounterApp  valor={ valor } />
		);

		const indicadorValor = wrapper.find('h2').text().trim();

		expect( indicadorValor ).toBe( '100' );
	})
	
	test('debe incrementar contador con el boton de +1', () => {

		wrapper.find('button').at(0).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect( counterText ).toBe( '11' );
	})
	
	test('debe decrementar contador con el boton de -1', () => {

		wrapper.find('button').at(2).simulate('click'); //reestablecer el valor por defecto
		wrapper.find('button').at(1).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect( counterText ).toBe( '9' );
	})

	test('debe reestablecer contador con el boton de Reset', () => {

		wrapper.find('button').at(2).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect( counterText ).toBe( '10' );
	})
})
