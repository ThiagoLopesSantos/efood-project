import { ButtonCard, Card, DescriptionCard, PdContainer, Title } from './styles'
import { ProductType } from '../../models/product'

export type Props = {
  data: ProductType
}

const Product = ({ data }: Props) => (
  <PdContainer>
    <Card>
      <img src={data.image} alt="foto" />
      <Title>{data.title}</Title>
      <DescriptionCard>{data.description}</DescriptionCard>
      <ButtonCard>adicionar ao carrinho</ButtonCard>
    </Card>
  </PdContainer>
)

export default Product
