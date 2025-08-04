import { useFruits } from '../hooks/useFruits.ts'
import Nav from './Nav.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>PokeDB</h1>
        <Nav />
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div>
    </>
  )
}

export default App
