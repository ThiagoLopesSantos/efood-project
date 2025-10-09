import { Link } from 'react-router-dom'

import { Banner, HeroImage, Logo, Title, TopHeader } from './styles'
import logo from '../../assets/images/logo.svg'
import BkImage from '../../assets/images/hero.png'
import Button from '../../components/Button'
import { ItemType } from '../../models/Item'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

interface HeaderProps {
  isHome: boolean
  restaurantData?: ItemType
}

const Header = ({ isHome, restaurantData }: HeaderProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
                <Button
                  onClick={openCart}
                  type="button"
                  title="ver carrinho"
                  to="/carrinho"
                >
                  <span>{items.length}</span> produto(s) no carrinho
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
}

export default Header
