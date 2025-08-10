// ...existing code...
import { useQuery } from '@tanstack/react-query'
import { Pokemon } from '../../models/pokemon'

// Fetch all Pokémon from the API
async function fetchPokemon(): Promise<Pokemon[]> {
  const response = await fetch('/api/pokemon')
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon')
  }
  return response.json()
}

export function usePokemonQuery() {
  return useQuery<Pokemon[], Error>({
    queryKey: ['pokemon'],
    queryFn: fetchPokemon,
  })
}
//
