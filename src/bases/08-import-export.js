import heroes/* , {owners} */ from '../data/heroes';
//heroes exp por defecto, owners exp individual

/* import { heroes } from './data/heroes' */
console.log( heroes );

export const getHeroeById = id => heroes.find(obj => obj.id === id);
//encuentra el objeto con id X en el array heroes

const getHeoesByOwner = Owner => heroes.filter( heroe  => heroe.owner === Owner);

console.log( getHeoesByOwner('DC'));