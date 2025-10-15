import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemType } from '../models/Item'

export type Product = {
  id: number
  price: number
}

export type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      decription: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  // Define a base da URL para todas as requisições
  // Assim, cada endpoint só precisa colocar o caminho final
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  // Aqui dentro ficam os "endpoints" — ou seja, as requisições específicas
  endpoints: (builder) => ({
    // Endpoint 1: lista de todos os restaurantes
    // Tipagem: retorna um array de ItemType (ItemType[])
    // O segundo tipo "void" significa que não precisa de parâmetro pra buscar
    getRestaurantsList: builder.query<ItemType[], void>({
      // Caminho que será adicionado à base URL
      // Resultado final: https://api-ebac.vercel.app/api/efood/restaurantes
      query: () => 'restaurantes'
    }),
    // Endpoint 2: detalhe de um restaurante específico
    // Tipagem: retorna apenas 1 restaurante (ItemType)
    // Recebe um parâmetro string (o "id" do restaurante)
    getProductList: builder.query<ItemType, string>({
      // Monta a URL completa com o ID
      // Exemplo: https://api-ebac.vercel.app/api/efood/restaurantes/1
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (payload) => ({
        url: 'checkout',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  useGetRestaurantsListQuery,
  useGetProductListQuery,
  usePurchaseMutation
} = api
export default api
