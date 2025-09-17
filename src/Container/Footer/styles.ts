import styled from 'styled-components'
import { colors } from '../../styles'
import { Logo } from '../Header/styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.bege2};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${Logo} {
    margin-top: 40px;
  }
`
export const SocialLinks = styled.ul`
  margin-top: 32px;
  display: flex;
  gap: 8px;
`
export const Info = styled.p`
  font-size: 10px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
`
