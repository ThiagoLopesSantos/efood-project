import { convertToBrl } from '../../../utils/priceConvert'
import * as S from '../styles'

type Props = {
  items: any[]
  onRemove: (id: number) => void
}

const CartItems = ({ items, onRemove }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <S.CartItem key={item.id}>
          <img src={item.foto} alt={item.nome} />
          <div>
            <h4>{item.nome}</h4>
            <span>
              {item.quantity}x - {convertToBrl(item.preco)}
            </span>
          </div>
          <S.RemoveButton onClick={() => onRemove(item.id)} />
        </S.CartItem>
      ))}
    </ul>
  )
}

export default CartItems
