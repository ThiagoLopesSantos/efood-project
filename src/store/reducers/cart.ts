import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../models/product'

//    Criei um novo tipo chamado CartItem
//    Ele é baseado no ProductType (vem da API),
//    mas adiciona um campo "quantity" pra controlar quantas unidades
//    de cada produto o usuário colocou no carrinho.
type CartItem = ProductType & { quantity: number }

//    Tipo que representa o estado do carrinho no Redux
//    items: lista de produtos no carrinho
//    isOpen: controla se o menu lateral do carrinho está aberto
type CartState = {
  items: CartItem[]
  isOpen: boolean
}

//    Estado inicial do carrinho (vazio e fechado)
const initialState: CartState = {
  items: [],
  isOpen: false
}

//  Slice do carrinho, com reducers pra manipular o estado
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adicionar produto ao carrinho
    // Se o produto já existe, só aumenta a quantidade
    // Se não existe, adiciona com quantity = 1
    add: (state, action: PayloadAction<ProductType>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    // Remover produto do carrinho
    // Se a quantidade for maior que 1, apenas diminui
    // Se for 1, remove o produto completamente
    remove: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      )

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload)
        }
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
