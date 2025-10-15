import { useParams } from 'react-router-dom'

import Header from '../../Container/Header'
import ProductList from '../../components/ProductList'
import { useGetProductListQuery } from '../../services/api'

const ItemDetail = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetProductListQuery(id!)

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
