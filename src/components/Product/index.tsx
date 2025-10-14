import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonCard, Card, DescriptionCard, PdContainer, Title } from './styles'
import { ProductType } from '../../models/product'
import {
  CloseIcon,
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalDetails,
  ModalImage,
  Overlay
} from './styles'
import close from '../../assets/icons/close.svg'
import { add, open } from '../../store/reducers/cart'
import { convertToBrl } from '../../utils/priceConvert'

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
      <PdContainer>
        <Card>
          <img src={data.foto} alt="foto" />
          <Title>{data.nome}</Title>
          <DescriptionCard>{getDescription(data.descricao)}</DescriptionCard>
          <ButtonCard onClick={() => setModalIsOpen(true)}>
            adicionar ao carrinho
          </ButtonCard>
        </Card>
      </PdContainer>

      {/*  Modal */}
      <ModalContainer className={modalIsOpen ? 'visible' : ''}>
        <Overlay onClick={() => setModalIsOpen(false)}></Overlay>
        <ModalContent className="container">
          <ModalImage src={data.foto} alt="Imagem do prato" />
          <ModalDetails>
            <h4>{data.nome}</h4>
            <ModalDescription>
              <p>{data.descricao}</p>
              <span>Serve: {data.porcao}</span>
            </ModalDescription>
            <button onClick={addToCart}>
              Adicionar ao carrinho - <span>{convertToBrl(data.preco)}</span>
            </button>
          </ModalDetails>
          <CloseIcon
            src={close}
            alt="close"
            onClick={() => setModalIsOpen(false)}
          />
        </ModalContent>
      </ModalContainer>
    </>
  )
}

export default Product
