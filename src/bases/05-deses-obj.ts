interface Hero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}



export const person: Hero = {
  name: 'Tony',
  age: 45,
  codeName: 'Ironman',
  // power: 'money',
}

// const { age, name, power = 'No tiene poder' } = person; // puede ser un Obj o un Array
// console.log({ age, name, power });


interface CreateHeroArgs {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

const createHero = ({ name, age, codeName, power }: CreateHeroArgs ) => ({
  id: 123123,
  name: name,
  age: age,
  codeName: codeName,
  power: power ?? 'No tiene poder',
})



console.log(  createHero( person ) );

