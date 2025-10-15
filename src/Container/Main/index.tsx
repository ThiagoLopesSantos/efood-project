import { ListContainer } from './styles'
import ItemList from '../../components/ItemList'
import { useGetRestaurantsListQuery } from '../../services/api'
import Loader from '../../Loader'

const Main = () => {
  const { data } = useGetRestaurantsListQuery()

  if (!data) {
    return (
      <div className="container">
        <Loader />
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
