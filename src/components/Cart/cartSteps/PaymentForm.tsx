import * as S from '../styles'
import { convertToBrl } from '../../../utils/priceConvert'

type Props = {
  onConfirm: () => void
  total: number
}

const PaymentForm = ({ onConfirm, total }: Props) => {
  return (
    <S.FormContainer
      onSubmit={(e) => {
        e.preventDefault()
        onConfirm()
      }}
    >
      <h3>Pagamento - Valor a pagar {convertToBrl(total)}</h3>
      <label htmlFor="cardOwner">Nome no cartão</label>
      <input type="text" name="cardOwner" id="cardOwner" />

      <div>
        <div>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input
            className="ipt-cardNumber"
            type="number"
            name="cardNumber"
            id="cardNumber"
          />
        </div>
        <S.CardCodeContainer>
          <label htmlFor="cardCode">CVV</label>
          <input type="number" name="cardCode" id="cardCode" />
        </S.CardCodeContainer>
      </div>

      <div>
        <div>
          <label htmlFor="expireMonth">Mês de vencimento</label>
          <input type="number" name="expireMonth" id="expireMonth" />
        </div>
        <div>
          <label htmlFor="expireYear">Ano de vencimento</label>
          <input type="number" name="expireYear" id="expireYear" />
        </div>
      </div>

      <S.BtnCart type="submit">Finalizar pedido</S.BtnCart>
    </S.FormContainer>
  )
}

export default PaymentForm
