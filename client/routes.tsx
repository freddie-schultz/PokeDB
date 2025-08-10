/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Database from './components/Database'
import IVCalculator from './components/IVCalculator'

const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index path="/" element={<Home />} />
    <Route path="/database" element={<Database />} />
    <Route path="/ivcalculator" element={<IVCalculator />} />
  </Route>,
)

export default routes
