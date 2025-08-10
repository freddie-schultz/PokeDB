import { NavLink } from 'react-router-dom'

export default function PageHeader() {
  return (
    <>
      <div>
        <h1>
          <NavLink to="/">PokeDB</NavLink>
        </h1>
      </div>
    </>
  )
}
