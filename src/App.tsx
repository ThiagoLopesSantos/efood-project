import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Footer from './Container/Footer'
import Ways from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Ways />
      <Footer />
    </BrowserRouter>
  )
}

export default App
