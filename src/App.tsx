import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './Container/Header'
import Main from './Container/Main'
import { GlobalStyle } from './styles'
import Footer from './Container/Footer'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </>
  )
}

export default App
