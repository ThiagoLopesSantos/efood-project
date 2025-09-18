import {
  DescriptionArea,
  DescriptionHeader,
  Itemcontainer,
  ItemImg,
  RateContainer
} from './styles'
import star from '../../assets/images/star.png'
import Tag from '../Tag'
import Button from '../Button'
import { ItemType } from '../../models/Item'

export type Props = {
  data: ItemType
}

const Item = ({ data }: Props) => (
  <Itemcontainer>
    <ItemImg style={{ backgroundImage: `url(${data.image})` }}>
      {data.tags.map((tag) => (
        <Tag key={tag} size={'small'}>
          {tag}
        </Tag>
      ))}
    </ItemImg>
    <DescriptionArea>
      <DescriptionHeader>
        <h4>{data.title}</h4>
        <RateContainer>
          <span>{data.rating}</span>
          <img src={star} alt="Estrela" />
        </RateContainer>
      </DescriptionHeader>
      <p>{data.description}</p>
      <Button
        type="link"
        to={`/item/${data.id}`}
        title={'Clique aqui para saber mais'}
      >
        <Tag size={'big'}>Saiba mais</Tag>
      </Button>
    </DescriptionArea>
  </Itemcontainer>
)

export default Item
