import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ItemType } from '../../models/Item'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'
import BkImage from '../../assets/images/hero.png'
import Button from '../../components/Button'

import * as S from './styles'

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
    <S.HeroImage style={{ backgroundImage: `url(${BkImage})` }}>
      {isHome ? (
        <div className="container">
          <S.Logo src={logo} alt="Efood" />
          <S.Title>
            Viva experiências gastronômicas <br />
            no conforto da sua casa
          </S.Title>
        </div>
      ) : (
        <>
          <div className="container">
            {/* Aqui um container para o header com logo e links */}
            <S.TopHeader>
              <Link to="/">Restaurantes</Link>
              <S.Logo src={logo} alt="Efood" />
              {/* Container para o link do carrinho */}
              <div>
                <Button
                  onClick={openCart}
                  type="button"
                  title="ver carrinho"
                  to="/carrinho"
                >
                  <span>
                    {items.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>{' '}
                  produto(s) no carrinho
                </Button>
              </div>
            </S.TopHeader>
          </div>
          <S.Banner style={{ backgroundImage: `url(${restaurantData?.capa})` }}>
            <div className="container">
              <span>{restaurantData?.tipo}</span>
              <span className="title">{restaurantData?.titulo}</span>
            </div>
          </S.Banner>
        </>
      )}
    </S.HeroImage>
  )
}

export default Header
