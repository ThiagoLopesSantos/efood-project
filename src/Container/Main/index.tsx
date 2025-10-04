import { useEffect, useState } from 'react'

import { ListContainer } from './styles'
import ItemList from '../../components/ItemList'
import { ItemType } from '../../models/Item'

const Main = () => {
  // Estado poara armazenar os itens
  const [items, setItems] = useState<ItemType[]>([])
  // Estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(true)

  // Hook para carregar os itens quando o componente for montado
  useEffect(() => {
    // Buscando os dados da API
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json()) // Convertendo a resposta para JSON
      .then((data: ItemType[]) => {
        // Armazenando os dados no estado
        setItems(data)
        setIsLoading(false) // Finalizando o carregameto
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados:', error)
        setIsLoading(false)
      })
  }, []) // Array vazio para executar apenas uma vez

  if (isLoading) {
    return (
      <div className="container">
        <h2>Carregando restaurantes...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <ListContainer>
        {/* // Renderizando a lista de itens */}
        <ItemList items={items} />
      </ListContainer>
    </div>
  )
}

export default Main
