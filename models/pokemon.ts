export interface PokemonData {
  species: string
  nickname: string
  level: number
  nature: string
  ivHp: number
  ivAttack: number
  ivDefense: number
  ivSpecialAttack: number
  ivSpecialDefense: number
  ivSpeed: number
}
export interface Pokemon extends PokemonData {
  id: number
}
