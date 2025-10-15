import { FormikErrors, FormikTouched } from 'formik'

export const getErrorMessage = (
  fieldName: string,
  touched: FormikTouched<any>,
  errors: FormikErrors<any>
) => {
  const isTouched = touched[fieldName]
  const isInvalid = errors[fieldName]

  return isTouched && isInvalid ? (errors[fieldName] as string) : ''
}
