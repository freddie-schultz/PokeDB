import React, { useState } from 'react'
import { PokemonData } from '../../models/pokemon'

const emptyForm = {
  nickname: '',
  species: '',
  level: 1,
  nature: '',
  ivHp: 0,
  ivAttack: 0,
  ivDefense: 0,
  ivSpecialAttack: 0,
  ivSpecialDefense: 0,
  ivSpeed: 0,
}

interface Props {
  submitForm: (newPokemon: PokemonData) => void
}

export default function AddPokemonForm(props: Props) {
  const [formData, setFormData] = useState(emptyForm)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFormData({ ...formData, [event.target.id]: event.target.value })
    console.log('Form data updated:', formData)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    props.submitForm(formData)
    setFormData(emptyForm)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nickname:
            <input
              type="text"
              id="nickname"
              name="nickname"
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Species:
            <input
              type="text"
              id="species"
              name="species"
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Level:
            <input
              type="number"
              id="level"
              name="level"
              min="1"
              max="100"
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Nature:
            <input
              type="text"
              id="nature"
              name="nature"
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Pokemon</button>
        </form>
      </div>
    </>
  )
}
