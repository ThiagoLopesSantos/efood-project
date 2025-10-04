import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'

const Ways = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/item/:id" element={<ItemDetail />} />
  </Routes>
)

export default Ways
