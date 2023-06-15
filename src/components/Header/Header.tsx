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
import { AddressModal } from '../AddressModal'

export function Header() {
  const { products, paymentData } = useContext(CartContext)
  const location =
    paymentData?.bairro && paymentData?.uf
      ? `${paymentData?.bairro}, ${paymentData?.uf}`
      : ''

  return (
    <HeaderContainer>
      <AddressModal />
      <nav>
        <NavLink to="/" title="Página Inicial">
          <img src={coffeDeliveryLogo} alt="" />
        </NavLink>

        <WrapperAddressAndCart>
          <Address>
            <MapPin weight="fill" width={20} height={25} />
            <span>{location}</span>
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
