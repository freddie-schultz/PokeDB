import { Router } from 'express'

import * as db from '../db/functions/pokemon.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const pokemon = await db.getAllPokemon()

    res.json(pokemon)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newPokemon = req.body
    const pokemonId = await db.addPokemon(newPokemon)

    res.status(201).json({ id: pokemonId })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to add Pokémon' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10)

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid Pokémon ID' })
  }

  try {
    await db.deletePokemon(id)
    res.status(204).send()
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to delete Pokémon' })
  }
})

export default router
