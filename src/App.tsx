import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { GlobalStyle } from './styles'
import Footer from './Container/Footer'
import Ways from './routes'
import { store, persistor } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <Ways />
          <Footer />
          <Cart />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
