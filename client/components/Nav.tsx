import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/database">Pokemon Database</NavLink>
          </li>
          <li>
            <NavLink to="/ivcalculator">IV Calculator</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
