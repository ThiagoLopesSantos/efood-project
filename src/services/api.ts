import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemType } from '../models/Item'

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
    })
  })
})

export const { useGetRestaurantsListQuery, useGetProductListQuery } = api
export default api
