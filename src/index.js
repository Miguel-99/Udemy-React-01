import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');


ReactDOM.render(<PrimeraApp saludo="asd" otra={4}/>, divRoot);
ReactDOM.render( <CounterApp value={2}/>, divRoot );