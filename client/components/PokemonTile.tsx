import { Pokemon } from '../../models/pokemon'

interface Props extends Pokemon {
  deletePokemon: (id: number) => void
}

export default function PokemonTile(props: Props) {
  return (
    <>
      <div className="pokemon-tile">
        <h2>{props.nickname}</h2>
        <h3>{`(${props.species})`}</h3>
        <h2>Level: {props.level}</h2>
        <h2>Nature: {props.nature}</h2>
        <h3>IVs:</h3>
        <p>HP: {props.ivHp}</p>
        <p>Attack: {props.ivAttack}</p>
        <p>Defense: {props.ivDefense}</p>
        <p>Special Attack: {props.ivSpecialAttack}</p>
        <p>Special Defense: {props.ivSpecialDefense}</p>
        <p>Speed: {props.ivSpeed}</p>
        <button
          onClick={() => {
            props.deletePokemon(props.id)
          }}
        >
          Delete
        </button>
      </div>
    </>
  )
}
