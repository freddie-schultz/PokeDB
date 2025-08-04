/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('pokemon', (table) => {
    table.integer('id').primary()
    table.string('species')
    table.string('nickname')
    table.integer('level')
    table.string('nature')
    table.integer('iv_hp')
    table.integer('iv_attack')
    table.integer('iv_defense')
    table.integer('iv_special_attack')
    table.integer('iv_special_defense')
    table.integer('iv_speed')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('pokemon')
}
