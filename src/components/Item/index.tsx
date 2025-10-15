import star from '../../assets/images/star.png'
import Tag from '../Tag'
import Button from '../Button'
import { ItemType } from '../../models/Item'

import * as S from './styles'

export type Props = {
  data: ItemType
}

const Item = ({ data }: Props) => {
  return (
    <S.Itemcontainer>
      <S.ItemImg style={{ backgroundImage: `url(${data.capa})` }}>
        <Tag size={'small'}>{data.tipo}</Tag>
      </S.ItemImg>
      <S.DescriptionArea>
        <S.DescriptionHeader>
          <h4>{data.titulo}</h4>
          <S.RateContainer>
            <span>{data.avaliacao}</span>
            <img src={star} alt="Estrela" />
          </S.RateContainer>
        </S.DescriptionHeader>
        <p>{data.descricao}</p>
        <Button
          type="link"
          to={`/item/${data.id}`}
          title={'Clique aqui para saber mais'}
        >
          <Tag size={'big'}>Saiba mais</Tag>
        </Button>
      </S.DescriptionArea>
    </S.Itemcontainer>
  )
}

export default Item
