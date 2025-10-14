import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { convertToBrl } from '../../utils/priceConvert'
import { getTotalPrice } from '../../utils/totalPrice'

import CartItems from './cartSteps/CartItems'
import DeliveryForm from './cartSteps/DeliveryForm'
import PaymentForm from './cartSteps/PaymentForm'
import SuccessMessage from './cartSteps/SuccessMessage'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState(1)

  const closeCart = () => {
    dispatch(close())
  }

  const removeProduct = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {currentStep === 1 && (
          <>
            <CartItems items={items} onRemove={removeProduct} />
            <S.PriceContainer>
              <p>Valor total</p>
              <p>{convertToBrl(getTotalPrice(items))}</p>
            </S.PriceContainer>
            <S.BtnCart onClick={() => setCurrentStep(2)}>
              Continuar com a entrega
            </S.BtnCart>
          </>
        )}

        {currentStep === 2 && (
          <>
            <DeliveryForm onNext={() => setCurrentStep(3)} />
            <S.BtnCart onClick={() => setCurrentStep(1)}>
              Voltar para o carrinho
            </S.BtnCart>
          </>
        )}

        {currentStep === 3 && (
          <>
            <PaymentForm
              onConfirm={() => setCurrentStep(4)}
              total={getTotalPrice(items)}
            />
            <S.BtnCart onClick={() => setCurrentStep(2)}>
              Voltar para a edição de endereço
            </S.BtnCart>
          </>
        )}

        {currentStep === 4 && (
          <>
            <SuccessMessage />
            <S.BtnCart onClick={closeCart}>Concluir</S.BtnCart>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
