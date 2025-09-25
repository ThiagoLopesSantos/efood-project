import ProductList from '../../components/ProductList'
import Header from '../../Container/Header'
import { mockProducts } from '../../mocks/products'

const ItemDetail = () => {
  return (
    <>
      <Header isHome={false} />
      <ProductList items={mockProducts} />
    </>
  )
}

export default ItemDetail
