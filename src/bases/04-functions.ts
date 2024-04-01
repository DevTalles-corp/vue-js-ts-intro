// function greetPerson( name: string ) {
//   return `Hola, ${ name }`;
// }
// const greetPerson = (name: string) => {
//   return `Hola, ${ name }`;
// }

export const greetPerson = (name: string) => `Hola, ${name}`;

export const getUser = ( uid: string ) => ({
  uid: uid,
  username: "Tony001",
});




const heroes = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
    power: 'Super fuerza',
  },
];


const hero = heroes.find( (h) => h.id === 1 );

console.log(hero?.power?.toUpperCase());