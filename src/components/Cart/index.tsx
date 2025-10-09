import { useDispatch, useSelector } from 'react-redux'
import {
  BtnCart,
  CartContainer,
  CartItem,
  Overlay,
  PriceContainer,
  RemoveButton,
  Sidebar
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../Product'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeProduct = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return acc + item.preco * item.quantity
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <span>
                  {item.quantity}x{priceFormat(item.preco)}
                </span>
              </div>
              <RemoveButton onClick={() => removeProduct(item.id)} />
            </CartItem>
          ))}
        </ul>
        <PriceContainer>
          <p>Valor total</p>
          <p>{priceFormat(getTotalPrice())}</p>
        </PriceContainer>
        <BtnCart>Continuar com a entrega</BtnCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
