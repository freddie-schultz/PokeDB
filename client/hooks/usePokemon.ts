import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Pokemon } from '../../models/pokemon'

async function getPokemon(): Promise<Pokemon[]> {
  const response = await request.get('/api/v1/pokemon')
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon')
  }
  return response.body
}

export function usePokemon() {
  return useQuery<Pokemon[], Error>({
    queryKey: ['pokemon'],
    queryFn: getPokemon,
  })
}
