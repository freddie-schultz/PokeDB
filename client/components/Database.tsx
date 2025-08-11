import { useState } from 'react'
import { usePokemon } from '../hooks/usePokemon'
import PokemonTile from './PokemonTile'
import AddPokemonForm from './AddPokemonForm'

export default function Database() {
  const { data: allPokemon, isError, isPending } = usePokemon()
  const [showForm, setShowForm] = useState(false)

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  if (isError) {
    return <h1>Error!</h1>
  }

  if (isPending) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Pokemon Database</h1>
      <button onClick={handleToggleForm}>
        {showForm == false ? 'Show Form' : 'Hide Form'}
      </button>
      {showForm && <AddPokemonForm />}
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
