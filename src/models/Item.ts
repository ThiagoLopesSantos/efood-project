import { ProductType } from './product'

// Definindo a tipagem dos itens
export type ItemType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProductType[] //A lista de produtos contidos no item
}
