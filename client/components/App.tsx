import { useFruits } from '../hooks/useFruits.ts'
import Nav from './Nav.tsx'
import PageHeader from './PageHeader.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <PageHeader />
        <Nav />
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div>
    </>
  )
}

export default App
