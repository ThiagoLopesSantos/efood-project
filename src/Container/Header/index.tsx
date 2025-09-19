import { Banner, HeroImage, Logo, Title, TopHeader } from './styles'
import logo from '../../assets/images/logo.svg'
import BkImage from '../../assets/images/hero.png'
import BgImage from '../../assets/images/laDolceVita.png'
import { Link } from 'react-router-dom'

interface HeaderProps {
  isHome: boolean
}

const Header = ({ isHome }: HeaderProps) => (
  <HeroImage style={{ backgroundImage: `url(${BkImage})` }}>
    {isHome ? (
      <div className="container">
        <Logo src={logo} alt="Efood" />
        <Title>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </Title>
      </div>
    ) : (
      <>
        <div className="container">
          {/* Aqui um container para o header com logo e links */}
          <TopHeader>
            <Link to="/">Restaurantes</Link>
            <Logo src={logo} alt="Efood" />
            {/* Container para o link do carrinho */}
            <div>
              <Link to="/carrinho">
                <span>0</span> produto(s) no carrinho
              </Link>
            </div>
          </TopHeader>
        </div>
        <Banner style={{ backgroundImage: `url(${BgImage})` }}>
          <div className="container">
            <span>Italiana</span>
            <h2>La Dolce Vita Trattoria</h2>
          </div>
        </Banner>
      </>
    )}
  </HeroImage>
)

export default Header
