import { Pokemon } from '../../models/pokemon'

export default function PokemonTile(props: Pokemon) {
  return (
    <>
      <div className="pokemon-tile">
        <h2>{props.nickname}</h2>
        <h3>{props.species}</h3>
      </div>
    </>
  )
}
