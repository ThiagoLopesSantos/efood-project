import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DeliveryData = {
  receiver: string
  description: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

type PaymentData = {
  name: string
  number: string
  code: string
  expiresMonth: string
  expiresYear: string
}

type CheckoutState = {
  delivery?: DeliveryData
  payment?: PaymentData
}

const initialState: CheckoutState = {}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDelivery: (state, action: PayloadAction<DeliveryData>) => {
      state.delivery = action.payload
    },
    setPayment: (state, action: PayloadAction<PaymentData>) => {
      state.payment = action.payload
    },
    resetCheckout: (state) => {
      state.delivery = undefined
      state.payment = undefined
    }
  }
})

export const { setDelivery, setPayment, resetCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
