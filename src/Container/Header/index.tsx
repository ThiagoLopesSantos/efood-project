import { Link } from 'react-router-dom'

import { Banner, HeroImage, Logo, Title, TopHeader } from './styles'
import logo from '../../assets/images/logo.svg'
import BkImage from '../../assets/images/hero.png'
import Button from '../../components/Button'
import { ItemType } from '../../models/Item'

interface HeaderProps {
  isHome: boolean
  restaurantData?: ItemType
}

const Header = ({ isHome, restaurantData }: HeaderProps) => (
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
              <Button type="button" title="ver carrinho" to="/carrinho">
                <span>0</span> produto(s) no carrinho
              </Button>
            </div>
          </TopHeader>
        </div>
        <Banner style={{ backgroundImage: `url(${restaurantData?.capa})` }}>
          <div className="container">
            <span>{restaurantData?.tipo}</span>
            <span className="title">{restaurantData?.titulo}</span>
          </div>
        </Banner>
      </>
    )}
  </HeroImage>
)

export default Header
