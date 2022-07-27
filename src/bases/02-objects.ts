
export const pokemonIds: number[] = [1, 20, 30, 34, 46]

interface Pokemon {
  id: number
  name: string
  age?: number | undefined
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
  // age: undefined
}

export const charmander: Pokemon = {
  id: 2,
  name: 'Charmander',
  age: 1
}

// arrays
export const pokemons: Pokemon[] = []

pokemons.push(charmander, bulbasaur)

console.log(pokemons);