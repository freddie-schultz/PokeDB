import { useState } from 'react'
import {
  useAddPokemon,
  useDeletePokemon,
  usePokemon,
} from '../hooks/usePokemon'
import PokemonTile from './PokemonTile'
import AddPokemonForm from './AddPokemonForm'
import { PokemonData } from '../../models/pokemon'

export default function Database() {
  const { data: allPokemon, isError, isPending } = usePokemon()
  const [showForm, setShowForm] = useState(false)
  const addPokemon = useAddPokemon()
  const deletePokemon = useDeletePokemon()

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  const handleSubmit = (newPokemon: PokemonData) => {
    addPokemon.mutate(newPokemon, {
      onSuccess: () => {
        setShowForm(false)
      },
      onError: (error) => {
        console.error('Failed to add Pokémon:', error)
      },
    })
  }

  const handleDelete = (id: number) => {
    deletePokemon.mutate(id, {
      onError: (error) => {
        console.error('Failed to delete Pokémon:', error)
      },
    })
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
        {showForm == false ? 'Add Pokemon' : 'Cancel'}
      </button>
      {showForm && <AddPokemonForm {...{ submitForm: handleSubmit }} />}
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
