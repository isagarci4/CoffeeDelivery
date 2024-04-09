import { Aside, HeaderContainer } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoCoffeeDelivery from '../../assets/coffe-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </div>

        <a href="">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </Aside>
    </HeaderContainer>
  )
}
