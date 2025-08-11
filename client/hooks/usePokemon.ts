import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import request from 'superagent'
import { Pokemon, PokemonData } from '../../models/pokemon'

async function getPokemon(): Promise<Pokemon[]> {
  const response = await request.get('/api/v1/pokemon')
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon')
  }
  return response.body
}

async function addPokemon(newPokemon: PokemonData) {
  const response = await request.post('/api/v1/pokemon').send(newPokemon)
  if (!response.ok) {
    throw new Error('Failed to add Pokémon')
  }
  return response.body as Pokemon
}

export function usePokemon() {
  const query = useQuery<Pokemon[], Error>({
    queryKey: ['pokemon'],
    queryFn: getPokemon,
  })

  return { ...query }
}

export function useAddPokemon() {
  return usePokemonMutation(addPokemon)
}

export function usePokemonMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pokemon'] })
    },
  })

  return mutation
}
