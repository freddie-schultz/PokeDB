import { Pokemon, PokemonData } from '../../../models/pokemon'
import database from '../connection.ts'

const pokemonKeys = [
  'pokemon.id as id',
  'pokemon.species as species',
  'pokemon.nickname as nickname',
  'pokemon.level as level',
  'pokemon.nature as nature',
  'pokemon.iv_hp as ivHp',
  'pokemon.iv_attack as ivAttack ',
  'pokemon.iv_defense as ivDefense ',
  'pokemon.iv_special_attack as ivSpecialAttack ',
  'pokemon.iv_special_defense as ivSpecialDefense ',
  'pokemon.iv_speed as ivSpeed ',
]

function convertPokemonDataToSnakeCase(data: PokemonData) {
  return {
    species: data.species,
    nickname: data.nickname,
    level: data.level,
    nature: data.nature,
    iv_hp: data.ivHp,
    iv_attack: data.ivAttack,
    iv_defense: data.ivDefense,
    iv_special_attack: data.ivSpecialAttack,
    iv_special_defense: data.ivSpecialDefense,
    iv_speed: data.ivSpeed,
  }
}

export async function getAllPokemon(): Promise<Pokemon[]> {
  const results = await database('pokemon').select(pokemonKeys)

  return results
}

export async function addPokemon(pokemon: PokemonData): Promise<number> {
  const results = await database('pokemon').insert(
    convertPokemonDataToSnakeCase(pokemon),
  )

  return results[0]
}

export async function deletePokemon(id: number): Promise<void> {
  await database('pokemon').where({ id }).del()
}
