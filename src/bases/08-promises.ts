import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// console.log('Inicio');
// new Promise( ( resolve, reject ) => {
//   // console.log('Cuerpo de la promesa');
//   setTimeout(() => {
//     // resolve('Mi amigo cumplió');

//     reject('Mi amigo, no cumplió');
//   }, 1000);
// })
//   .then( ( message ) => console.log( message )  )
//   .catch( errorMessage => console.log( errorMessage ) )
//   .finally( () => console.log('Fin de la promesa') );
// console.log('Fin');

const getHeoByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      hero ? resolve(hero) : reject(`Héroe no encontrado #${id}`);
      
    }, 1500);
  });
};

getHeoByIdAsync(3)
  .then((hero) => console.log("El nombre es", hero.name))
  .catch(alert);
