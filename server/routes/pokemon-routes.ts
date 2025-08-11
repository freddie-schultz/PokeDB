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

export default router
