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

export default router
