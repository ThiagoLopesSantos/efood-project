import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { getErrorMessage } from '../../../utils/formErrorMessage'

import * as S from '../styles'

export type DeliveryValues = {
  name: string
  address: string
  city: string
  zipCode: string
  numberAddress: string
  complement: string
}

type Props = {
  onNext: (values: DeliveryValues) => void
}

const DeliveryForm = ({ onNext }: Props) => {
  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      numberAddress: '',
      complement: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(9, 'Digite nome e sobrenome')
        .required('Campo obrigatório'),
      address: Yup.string().required('O endereço é obrigatório'),
      city: Yup.string().required('A cidade é obrigatória'),
      zipCode: Yup.string()
        .min(9, 'Deve conter 9 caracteres')
        .max(9, 'Deve conter 9 caracteres')
        .required('O CEP é obrigatório')
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido. Use o formato 00000-000'),
      numberAddress: Yup.number()
        .required('O número é obrigatório')
        .typeError('Digite apenas números'),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      console.log('Dados do envio:', values)
      onNext(values)
    }
  })

  return (
    <S.FormContainer onSubmit={form.handleSubmit}>
      <h3>Entrega</h3>

      <label htmlFor="name">Quem irá receber</label>
      {form.touched.name && form.errors.name && (
        <small>{getErrorMessage('name', form.touched, form.errors)}</small>
      )}
      <input
        type="text"
        name="name"
        id="name"
        value={form.values.name}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <label htmlFor="address">Endereço</label>
      {form.touched.address && form.errors.address && (
        <small>{getErrorMessage('address', form.touched, form.errors)}</small>
      )}
      <input
        type="text"
        name="address"
        id="address"
        value={form.values.address}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <label htmlFor="city">Cidade</label>
      {form.touched.city && form.errors.city && (
        <small>{getErrorMessage('city', form.touched, form.errors)}</small>
      )}
      <input
        type="text"
        name="city"
        id="city"
        value={form.values.city}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <div>
        <div>
          <label htmlFor="zipCode">CEP</label>
          {form.touched.zipCode && form.errors.zipCode && (
            <small>
              {getErrorMessage('zipCode', form.touched, form.errors)}
            </small>
          )}
          <InputMask
            type="text"
            name="zipCode"
            id="zipCode"
            value={form.values.zipCode}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="99999-999"
          />
        </div>
        <div>
          <label htmlFor="numberAddress">Número</label>
          {form.touched.numberAddress && form.errors.numberAddress && (
            <small>
              {getErrorMessage('numberAddress', form.touched, form.errors)}
            </small>
          )}
          <input
            type="text"
            name="numberAddress"
            id="numberAddress"
            value={form.values.numberAddress}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
      </div>

      <label htmlFor="complement">Complemento (opcional)</label>
      <input
        type="text"
        name="complement"
        id="complement"
        value={form.values.complement}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <S.BtnCart type="submit">Continuar com o pagamento</S.BtnCart>
    </S.FormContainer>
  )
}

export default DeliveryForm
