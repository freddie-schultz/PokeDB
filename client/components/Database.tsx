import { usePokemon } from '../hooks/usePokemon'
import PokemonTile from './PokemonTile'

export default function Database() {
  const { data: allPokemon, isError, isPending } = usePokemon()

  if (isError) {
    return <h1>Error!</h1>
  }

  if (isPending) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Pokemon Database</h1>
      {allPokemon.map((pokemon, i) => {
        return (
          <>
            <PokemonTile key={i} {...pokemon} />
          </>
        )
      })}
    </>
  )
}
