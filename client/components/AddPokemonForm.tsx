import React, { useState } from 'react'

const emptyForm = {
  nickname: '',
  species: '',
  level: 1,
  nature: '',
}

export default function AddPokemonForm() {
  const [formData, setFormData] = useState(emptyForm)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nickname:
            <input
              type="text"
              name="nickname"
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Species:
            <input
              type="text"
              name="species"
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Level:
            <input
              type="number"
              name="level"
              min="1"
              max="100"
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Nature:
            <input type="text" name="nature" required onChange={handleChange} />
          </label>
          <button type="submit">Add Pokemon</button>
        </form>
      </div>
    </>
  )
}
