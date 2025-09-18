// Aqui estou mapeando os dados

import { ItemType } from '../../models/Item'
import Item from '../Item'

export type Props = {
  items: ItemType[]
}

const ItemList = ({ items }: Props) => (
  <>
    {items.map((item) => (
      <Item key={item.id} data={item} />
    ))}
  </>
)

export default ItemList
