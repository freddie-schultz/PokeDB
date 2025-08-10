export interface PokemonData {
  species: number
  nickname: number
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
