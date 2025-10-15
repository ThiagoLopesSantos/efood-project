import { useParams } from 'react-router-dom'

import Header from '../../Container/Header'
import ProductList from '../../components/ProductList'
import Loader from '../../Loader'
import { useGetProductListQuery } from '../../services/api'

type ItemsParams = {
  id: string
}

const ItemDetail = () => {
  const { id } = useParams() as ItemsParams
  const { data: restaurant } = useGetProductListQuery(id)

  if (!restaurant) {
    return (
      <>
        <Header isHome={false} />
        <div className="container">
          <Loader />
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
