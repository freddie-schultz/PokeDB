import { Pokemon } from '../../../models/pokemon'
import database from '../connection.ts'

export async function getAllPokemon(): Promise<Pokemon[]> {
  const results = await database('pokemon').select()

  return results
}
