import styled from 'styled-components'
import { colors } from '../../styles'
import recicle from '../../assets/icons/recicle.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  cursor: pointer;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: scroll;
`
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.beige2};
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  background-color: ${colors.beige2};
  display: flex;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 14px;
    margin-top: 16px;
  }
`
export const RemoveButton = styled.button`
  background-image: url(${recicle});
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  bottom: 8px;
  right: 8px;
  position: absolute;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const BtnCart = styled.button`
  background-color: ${colors.beige2};
  color: ${colors.red};
  font-weight: bold;
  font-size: 14px;
  max-width: 100%;
  width: 100%;
  padding: 4px 0;
  margin-bottom: 8px;
  border: none;
  cursor: pointer;
`
// FORMULÁRIO DE ENDEREÇO DO CARRINHO
export const FormContainer = styled.form`
  color: ${colors.beige2};

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }

  label {
    display: block;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    background-color: ${colors.beige2};
    width: 100%;
    height: 32px;
    border: none;
    margin-bottom: 8px;
    padding: 0 8px;
    font-size: 14px;
    font-weight: bold;
  }

  > div {
    display: flex;
    justify-content: space-between;

    input {
      max-width: 150px;
    }
    .ipt-cardNumber {
      max-width: 100%;
      width: 228px;
    }
  }

  small {
    color: yellow;
    font-size: 10px;
    display: block;
  }

  ${BtnCart} {
    margin-top: 16px;
  }
`
export const CardCodeContainer = styled.div`
  max-width: 80px;
  width: 100%;
`
export const SuccessContainer = styled.div`
  color: ${colors.beige2};

  h3 {
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 16px;
  }

  p {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 22px;
  }
`
export const EmptyCartText = styled.p`
  color: ${colors.beige2};
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
`
