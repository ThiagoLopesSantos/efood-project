import { ListContainer } from './styles'
import ItemList from '../../components/ItemList'
import { mockItems } from '../../mocks/items'

const Main = () => (
  <div className="container">
    <ListContainer>
      <ItemList items={mockItems} />
    </ListContainer>
  </div>
)

export default Main
