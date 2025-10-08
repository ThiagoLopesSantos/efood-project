import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Footer from './Container/Footer'
import Ways from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Ways />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
