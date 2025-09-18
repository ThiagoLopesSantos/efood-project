import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Container/Header'
import { GlobalStyle } from './styles'
import Footer from './Container/Footer'
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'

const Ways = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/item/:id" element={<ItemDetail />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Ways />
      <Footer />
    </BrowserRouter>
  )
}

export default App
