import PropTypes from 'prop-types'
//Functional Components 
const PrimeraApp = ( { saludo, despedida = "adios popo" }) => {

/* 	const saludo = "hola mundo gris";
	const miObj = {nombre: "Miky", edad: 21} */
	return ( 
		<>
			<h1> { saludo }</h1>
{/*<p> {JSON.stringify(miObj, null, 10)} </p> manera de representar un objeto en hmtl */}
			<p> { despedida }</p>
			<p>mi primer parrafo</p>
		</>
	)
}

PrimeraApp.propTypes = {
	saludo:PropTypes.string.isRequired,
	otra: PropTypes.number
}
PrimeraApp.defaultProps = {
	propiedadPorDefecto: "Soy una propiedad por defecto"
}

export default PrimeraApp;
