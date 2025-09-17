import Header from './Container/Header'
import Main from './Container/Main'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <div className="container"></div>
    </>
  )
}

export default App
