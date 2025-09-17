import { HeroImage, Logo, Title } from './styles'
import logo from '../../assets/images/logo.svg'
import BkImage from '../../assets/images/hero.png'

const Header = () => (
  <HeroImage style={{ backgroundImage: `url(${BkImage})` }}>
    <div className="container">
      <Logo src={logo} alt="Efood" />
      <Title>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Title>
    </div>
  </HeroImage>
)

export default Header
