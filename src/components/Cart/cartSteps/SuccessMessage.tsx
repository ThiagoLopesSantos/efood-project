import * as S from '../styles'

type Props = {
  orderData: any | null
}

const SuccessMessage = ({ orderData }: Props) => {
  if (!orderData) {
    return (
      <S.SuccessContainer>
        <h3>Pedido realizado</h3>
        <p>Obrigado! Em instantes chegaremos com mais informações.</p>
      </S.SuccessContainer>
    )
  }
  return (
    <S.SuccessContainer>
      <h3>Pedido realizado - {orderData.orderId}</h3>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.{' '}
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
    </S.SuccessContainer>
  )
}
export default SuccessMessage
