import Product from '../Product'
import { ProductType } from '../../models/product'
import { PdContainer } from '../Product/styles'

export type Props = {
  items: ProductType[]
}

const ProductList = ({ items }: Props) => (
  <div className="container">
    <PdContainer>
      {items.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </PdContainer>
  </div>
)

export default ProductList
