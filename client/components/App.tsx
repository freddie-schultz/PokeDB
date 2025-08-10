import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'
import PageHeader from './PageHeader.tsx'

function App() {
  return (
    <>
      <div className="app">
        <PageHeader />
        <div id="page-container">
          <div id="navbar">
            <Nav />
          </div>
          <div id="main-outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
