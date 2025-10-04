import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../Container/Header'
import ProductList from '../../components/ProductList'

// Importe os modelos de dados
import { ItemType } from '../../models/Item'

const ItemDetail = () => {
  const { id } = useParams()
  // Estado para os detalhes do restaurante
  const [restaurant, setRestaurant] = useState<ItemType>()

  // Função para buscar os detalhes do restaurante e o cardápio
  useEffect(() => {
    if (id) {
      // Endpoint para buscar o restaurante específico
      fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((data: ItemType) => {
          setRestaurant(data)
        })
        .catch((error) => console.error('Erro ao buscar detalhes:', error))
    }
  }, [id]) // Executa sempre que o 'id' da URL mudar

  if (!restaurant) {
    return (
      <>
        <Header isHome={false} />
        <div
          className="container"
          style={{ textAlign: 'center', padding: '64px' }}
        >
          <h2>Carregando detalhes do restaurante...</h2>
        </div>
      </>
    )
  }

  return (
    <>
      <Header isHome={false} restaurantData={restaurant} />
      <ProductList items={restaurant.cardapio} />
    </>
  )
}

export default ItemDetail
