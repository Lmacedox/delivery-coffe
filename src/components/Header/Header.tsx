import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import coffeDeliveryLogo from '../../assets/logo.svg'
import { CartContext } from '../../context/CardContext'
import {
  Address,
  AmountToCart,
  Cart,
  HeaderContainer,
  WrapperAddressAndCart,
} from './Header.style'

export function Header() {
  const { products } = useContext(CartContext)

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Página Inicial">
          <img src={coffeDeliveryLogo} alt="" />
        </NavLink>

        <WrapperAddressAndCart>
          <Address>
            <MapPin weight="fill" width={20} height={25} />
            <span>Porto Alegre, RS</span>
          </Address>

          <NavLink to="/checkout" title="Página de Checkout">
            <Cart>
              <ShoppingCart weight="fill" width={22} height={22} />
              {!!products.length && (
                <AmountToCart>
                  <span>{products.length}</span>
                </AmountToCart>
              )}
            </Cart>
          </NavLink>
        </WrapperAddressAndCart>
      </nav>
    </HeaderContainer>
  )
}
