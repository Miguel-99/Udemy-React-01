import PropTypes from 'prop-types'
import { useState } from 'react';

const CounterApp = ( {valor}) => { 
// manipular todos los args -> props, para entonces hacer props.mipropiedad. manipular solo el arg que quiero -> {argX}

	const [counter, setCounter] = useState( valor );

	const handleAdd = () => setCounter( x => x + 1 ); //manera de manera de manipular el estado sin el primer arg.
	const handleSubstract = () => setCounter( x => x - 1 );
	const handleReset = () => setCounter( x => valor );

	return (
		<>
			<h1> CounterApp</h1>
			<h2>{counter}</h2>
			<button onClick={ handleAdd }> +1 </button>
			<button onClick={ handleSubstract }> -1 </button>
			<button onClick={ handleReset }> Reset </button>
		</>


	);
}

CounterApp.propTypes = {
	valor: PropTypes.number.isRequired
}

export default CounterApp;