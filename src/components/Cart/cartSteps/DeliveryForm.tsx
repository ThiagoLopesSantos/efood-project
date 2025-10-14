import * as S from '../styles'

type Props = {
  onNext: () => void
}

const DeliveryForm = ({ onNext }: Props) => {
  return (
    <S.FormContainer
      onSubmit={(e) => {
        e.preventDefault()
        onNext()
      }}
    >
      <h3>Entrega</h3>

      <label htmlFor="name">Quem irá receber</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="address">Endereço</label>
      <input type="text" name="address" id="address" />
      <label htmlFor="city">Cidade</label>
      <input type="text" name="city" id="city" />

      <div>
        <div>
          <label htmlFor="post-code">CEP</label>
          <input type="text" name="post-code" id="post-code" />
        </div>
        <div>
          <label htmlFor="number-address">Número</label>
          <input type="text" name="number-address" id="number-address" />
        </div>
      </div>

      <label htmlFor="complement">Complemento (opcional)</label>
      <input type="text" name="complement" id="complement" />

      <S.BtnCart type="submit">Continuar com o pagamento</S.BtnCart>
    </S.FormContainer>
  )
}

export default DeliveryForm
