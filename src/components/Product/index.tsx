import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ProductType } from '../../models/product'
import close from '../../assets/icons/close.svg'
import { add, open } from '../../store/reducers/cart'
import { convertToBrl } from '../../utils/priceConvert'

import * as S from './styles'

export type Props = {
  data: ProductType
}

const Product = ({ data }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(data))
    dispatch(open())
  }

  // limitando a quantidade de caracteres na descrição
  const getDescription = (description: string) => {
    if (description.length > 121) {
      return description.slice(0, 118) + '...'
    }
    return description
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <S.PdContainer>
        <S.Card>
          <img src={data.foto} alt="foto" />
          <S.Title>{data.nome}</S.Title>
          <S.DescriptionCard>
            {getDescription(data.descricao)}
          </S.DescriptionCard>
          <S.ButtonCard onClick={() => setModalIsOpen(true)}>
            adicionar ao carrinho
          </S.ButtonCard>
        </S.Card>
      </S.PdContainer>

      {/*  Modal */}
      <S.ModalContainer className={modalIsOpen ? 'visible' : ''}>
        <S.Overlay onClick={() => setModalIsOpen(false)}></S.Overlay>
        <S.ModalContent className="container">
          <S.ModalImage src={data.foto} alt="Imagem do prato" />
          <S.ModalDetails>
            <h4>{data.nome}</h4>
            <S.ModalDescription>
              <p>{data.descricao}</p>
              <span>Serve: {data.porcao}</span>
            </S.ModalDescription>
            <button onClick={addToCart}>
              Adicionar ao carrinho - <span>{convertToBrl(data.preco)}</span>
            </button>
          </S.ModalDetails>
          <S.CloseIcon
            src={close}
            alt="close"
            onClick={() => setModalIsOpen(false)}
          />
        </S.ModalContent>
      </S.ModalContainer>
    </>
  )
}

export default Product
