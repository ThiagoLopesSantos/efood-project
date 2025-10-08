import pizza from '../../assets/images/pizza.svg'
import {
  BtnCart,
  CartContainer,
  CartItem,
  Overlay,
  PriceContainer,
  RemoveButton,
  Sidebar
} from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} alt="pizza" />
            <div>
              <h4>Nome do produto</h4>
              <span>R$ 60,90</span>
            </div>
            <RemoveButton />
          </CartItem>
        </ul>
        <PriceContainer>
          <p>Valor total</p>
          <p>R$ 60,90</p>
        </PriceContainer>
        <BtnCart>Continuar com a entrega</BtnCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
