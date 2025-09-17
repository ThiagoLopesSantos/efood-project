import {
  DescriptionArea,
  DescriptionHeader,
  Itemcontainer,
  ItemImg,
  RateContainer
} from './styles'
import star from '../../assets/images/star.png'
import hiokiSushi from '../../assets/images/hioki_sushui.png'
import Tag from '../Tag'
import Button from '../Button'

const Item = () => (
  <Itemcontainer>
    <ItemImg style={{ backgroundImage: `url(${hiokiSushi})` }}>
      <Tag size={'small'}>Destaque da semana</Tag>
      <Tag size={'small'}>Japonesa</Tag>
    </ItemImg>
    {/* <img src={hiokiSushi} alt="Hioki Sushi" /> */}
    <DescriptionArea>
      <DescriptionHeader>
        <h4>Hioki Sushi</h4>
        <RateContainer>
          <span>4.9</span>
          <img src={star} alt="Estrela" />
        </RateContainer>
      </DescriptionHeader>
      <p>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. <br />
        Experimente o Japão sem sair do lar com nosso delivery!
      </p>
      <Button type="link" to="/item" title={'Clique aqui para saber mais'}>
        <Tag size={'big'}>Saiba mais</Tag>
      </Button>
    </DescriptionArea>
  </Itemcontainer>
)

export default Item
