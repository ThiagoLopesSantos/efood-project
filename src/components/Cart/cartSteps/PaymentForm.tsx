import { useFormik } from 'formik'
import * as Yup from 'yup'

import { getErrorMessage } from '../../../utils/formErrorMessage'
import { convertToBrl } from '../../../utils/priceConvert'

import * as S from '../styles'

export type PaymentValues = {
  cardOwner: string
  cardNumber: string
  cardCode: string
  expireMonth: string
  expireYear: string
}

type Props = {
  onConfirm: (values: PaymentValues) => void
  total: number
}

const PaymentForm = ({ onConfirm, total }: Props) => {
  const form = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string().required('O nome no cartão é obrigatório'),
      cardNumber: Yup.string()
        .required('O número do cartão é obrigatório')
        .matches(/^\d{16}$/, 'O cartão deve ter 16 dígitos'),
      cardCode: Yup.string()
        .min(3, 'Mínimo de 3 números')
        .max(3, 'Máximo de 3 números')
        .required('CVV é obrigatório')
        .matches(/^\d{3,4}$/, 'CVV inválido'),
      expireMonth: Yup.number()
        .required('Mês obrigatório')
        .min(1, 'Mês inválido')
        .max(12, 'Mês inválido'),
      expireYear: Yup.number()
        .required('Ano obrigatório')
        .min(new Date().getFullYear() % 100, 'Ano inválido')
    }),
    onSubmit: (values) => {
      console.log('Dados do envio:', values)
      onConfirm(values)
    }
  })
  return (
    <S.FormContainer onSubmit={form.handleSubmit}>
      <h3>Pagamento - Valor a pagar {convertToBrl(total)}</h3>

      <label htmlFor="cardOwner">Nome no cartão</label>
      {form.touched.cardOwner && form.errors.cardOwner && (
        <small>{getErrorMessage('cardOwner', form.touched, form.errors)}</small>
      )}
      <input
        type="text"
        name="cardOwner"
        id="cardOwner"
        value={form.values.cardOwner}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <div>
        <div>
          <label htmlFor="cardNumber">Número do cartão</label>
          {form.touched.cardNumber && form.errors.cardNumber && (
            <small>
              {getErrorMessage('cardNumber', form.touched, form.errors)}
            </small>
          )}
          <input
            className="ipt-cardNumber"
            type="number"
            name="cardNumber"
            id="cardNumber"
            value={form.values.cardNumber}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <S.CardCodeContainer>
          <label htmlFor="cardCode">CVV</label>
          {form.touched.cardCode && form.errors.cardCode && (
            <small>
              {getErrorMessage('cardCode', form.touched, form.errors)}
            </small>
          )}
          <input
            type="number"
            name="cardCode"
            id="cardCode"
            value={form.values.cardCode}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.CardCodeContainer>
      </div>

      <div>
        <div>
          <label htmlFor="expireMonth">Mês de vencimento</label>
          {form.touched.expireMonth && form.errors.expireMonth && (
            <small>
              {getErrorMessage('expireMonth', form.touched, form.errors)}
            </small>
          )}
          <input
            type="number"
            name="expireMonth"
            id="expireMonth"
            value={form.values.expireMonth}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div>
          <label htmlFor="expireYear">Ano de vencimento</label>
          {form.touched.expireYear && form.errors.expireYear && (
            <small>
              {getErrorMessage('expireYear', form.touched, form.errors)}
            </small>
          )}
          <input
            type="number"
            name="expireYear"
            id="expireYear"
            value={form.values.expireYear}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
      </div>

      <S.BtnCart type="submit">Finalizar pedido</S.BtnCart>
    </S.FormContainer>
  )
}

export default PaymentForm
