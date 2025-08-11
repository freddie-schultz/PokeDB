import { usePokemon } from '../hooks/usePokemon'

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
      {allPokemon.map((pokemon) => {
        return (
          <>
            <div>
              <h2>{pokemon.nickname}</h2>
              <h3>{pokemon.species}</h3>
            </div>
          </>
        )
      })}
    </>
  )
}
