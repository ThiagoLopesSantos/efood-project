import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Container/Header'
import { GlobalStyle } from './styles'
import Footer from './Container/Footer'
import Home from './pages/Home'

const Ways = () => (
  <Routes>
    <Route path="/" element={<Home />} />
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
