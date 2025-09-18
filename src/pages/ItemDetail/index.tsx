import { useParams } from 'react-router-dom'
import { mockItems } from '../../mocks/items'
import Main from '../../Container/Main'

const ItemDetail = () => {
  // Usando o useParmas para recuperar o id do mmock que criei
  const { id } = useParams()
  const item = mockItems.find((i: { id: number }) => i.id === Number(id))

  if (!item) {
    return <h2>Item não encontrado</h2>
  }

  return (
    <div className="container">
      <Main />
    </div>
  )
}

export default ItemDetail
