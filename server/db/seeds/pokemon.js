/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('pokemon').del()
  await knex('pokemon').insert([
    {
      id: 1,
      species: 'Gengar',
      nickname: 'Shadow',
      level: 50,
      nature: 'Modest',
      iv_hp: 31,
      iv_attack: 30,
      iv_defense: 30,
      iv_special_attack: 31,
      iv_special_defense: 30,
      iv_speed: 31,
    },
    {
      id: 2,
      species: 'Blaziken',
      nickname: 'Blazey',
      level: 65,
      nature: 'Adamant',
      iv_hp: 31,
      iv_attack: 23,
      iv_defense: 23,
      iv_special_attack: 9,
      iv_special_defense: 31,
      iv_speed: 29,
    },
    {
      id: 3,
      species: 'Bulbasaur',
      nickname: 'Leafy',
      level: 5,
      nature: 'Calm',
      iv_hp: 20,
      iv_attack: 12,
      iv_defense: 30,
      iv_special_attack: 15,
      iv_special_defense: 5,
      iv_speed: 16,
    },
  ])
}
