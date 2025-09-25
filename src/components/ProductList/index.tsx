import { ButtonCard, Card, DescriptionCard, PdContainer, Title } from './styles'
import pizzaImg from '../../assets/images/pizza.svg'

const ProductList = () => (
  <div className="container">
    <PdContainer>
      <Card>
        <img src={pizzaImg} alt="foto" />
        <Title>Pizza Marguerita</Title>
        <DescriptionCard>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </DescriptionCard>
        <ButtonCard>adicionar ao carrinho</ButtonCard>
      </Card>
      <Card>
        <img src={pizzaImg} alt="foto" />
        <Title>Pizza Marguerita</Title>
        <DescriptionCard>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </DescriptionCard>
        <ButtonCard>adicionar ao carrinho</ButtonCard>
      </Card>
      <Card>
        <img src={pizzaImg} alt="foto" />
        <Title>Pizza Marguerita</Title>
        <DescriptionCard>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </DescriptionCard>
        <ButtonCard>adicionar ao carrinho</ButtonCard>
      </Card>
    </PdContainer>
  </div>
)

export default ProductList
