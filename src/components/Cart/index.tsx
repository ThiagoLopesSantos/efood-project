import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, clearCart } from '../../store/reducers/cart'
import { convertToBrl } from '../../utils/priceConvert'
import { getTotalPrice } from '../../utils/totalPrice'
import { PurchasePayload, usePurchaseMutation } from '../../services/api'

import CartItems from './cartSteps/CartItems'
import DeliveryForm, { DeliveryValues } from './cartSteps/DeliveryForm'
import PaymentForm, { PaymentValues } from './cartSteps/PaymentForm'
import SuccessMessage from './cartSteps/SuccessMessage'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState(1)

  // guarda os valores vindos dos formulários
  const [deliveryValues, setDeliveryValues] = useState<DeliveryValues | null>(
    null
  )
  const [paymentValues, setPaymentValues] = useState<PaymentValues | null>(null)
  const [orderData, setOrderData] = useState<any | null>(null)

  // mutation
  const [purchase] = usePurchaseMutation()

  const closeCart = () => {
    dispatch(close())
    // Resetar steps e dados de pedido
    setCurrentStep(1)
    setDeliveryValues(null)
    setPaymentValues(null)
    setOrderData(null)
  }

  const removeProduct = (id: number) => {
    dispatch(remove(id))
  }

  const handleConfirmOrder = async (paymentVals: PaymentValues) => {
    if (!deliveryValues) {
      console.error('Delivery values faltando')
      return
    }

    const payload: PurchasePayload = {
      products: items.map((item) => ({ id: item.id, price: item.preco })),
      delivery: {
        receiver: deliveryValues.name,
        address: {
          decription: deliveryValues.address,
          city: deliveryValues.city,
          zipCode: deliveryValues.zipCode,
          number: Number(deliveryValues.numberAddress),
          complement: deliveryValues.complement
        }
      },
      payment: {
        card: {
          name: paymentVals.cardOwner,
          number: paymentVals.cardNumber,
          code: Number(paymentVals.cardCode),
          expires: {
            month: Number(paymentVals.expireMonth),
            year: Number(paymentVals.expireYear)
          }
        }
      }
    }

    try {
      const response = await purchase(payload).unwrap()
      console.log('Pedido confirmado:', response) // Exibe o orderId no console
      setOrderData(response) // guarda resposta para exibir na tela de sucesso
      setCurrentStep(4)
      //dispatch(clearCart()) // Limpa o carrinho
    } catch (err) {
      console.error('Erro ao finalizar pedido:', err) // Exibe erro no console caso não finalize
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
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
                <DeliveryForm
                  onNext={(values) => {
                    setDeliveryValues(values) // guarda dados do delivery
                    setCurrentStep(3)
                  }}
                />
                <S.BtnCart onClick={() => setCurrentStep(1)}>
                  Voltar para o carrinho
                </S.BtnCart>
              </>
            )}

            {currentStep === 3 && (
              <>
                <PaymentForm
                  onConfirm={(values) => {
                    setPaymentValues(values) // guarda os valores do payment (opcional)
                    handleConfirmOrder(values) // monta payload (usa deliveryValues do state) e chama API
                  }}
                  total={getTotalPrice(items)}
                />
                <S.BtnCart onClick={() => setCurrentStep(2)}>
                  Voltar para a edição de endereço
                </S.BtnCart>
              </>
            )}

            {currentStep === 4 && (
              <>
                <SuccessMessage orderData={orderData} />
                <S.BtnCart
                  onClick={() => {
                    closeCart()
                    dispatch(clearCart())
                  }}
                >
                  Concluir
                </S.BtnCart>
              </>
            )}
          </>
        ) : (
          <>
            <S.EmptyCartText>
              O carrinho esta vazio. Volte e adicione um prato para continuar.
            </S.EmptyCartText>

            <S.BtnCart onClick={closeCart}>Voltar para as compras</S.BtnCart>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
