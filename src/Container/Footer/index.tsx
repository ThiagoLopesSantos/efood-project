import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/icons/instagram-icon.svg'
import facebook from '../../assets/icons/facebook-icon.svg'
import twiiter from '../../assets/icons/twiiter-icon.svg'
import { Logo } from '../Header/styles'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <Logo src={logo} alt="Efood" />
    <S.SocialLinks>
      <li>
        <a href="#">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twiiter} alt="Instagram" />
        </a>
      </li>
    </S.SocialLinks>
    <S.Info>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.{' '}
    </S.Info>
  </S.FooterContainer>
)

export default Footer
