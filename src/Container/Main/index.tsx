import { ListContainer } from './styles'
import ItemList from '../../components/ItemList'
import { useGetRestaurantsListQuery } from '../../services/api'

const Main = () => {
  const { data, isLoading } = useGetRestaurantsListQuery()

  if (!data) {
    return (
      <div className="container">
        <h2>Carregando restaurantes...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <ListContainer>
        {/* // Renderizando a lista de restaurantes */}
        <ItemList items={data} />
      </ListContainer>
    </div>
  )
}

export default Main
