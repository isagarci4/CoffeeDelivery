import {
  AddToCart,
  Card,
  CartButton,
  CoffeeDetails,
  DecrementIncrementInput,
  Price,
} from './styles'
import cafe from '../../assets/Expresso.png'
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

export function CoffeeCard() {
  return (
    <Card>
      <img src={cafe} alt="" />
      <span>TRADICIONAL</span>

      <CoffeeDetails>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeDetails>

      <AddToCart>
        <Price>
          R$ <strong>9,90</strong>
        </Price>

        <DecrementIncrementInput>
          <button id="decrement">
            <Minus size={14} />
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value="1"
            min="1"
            max="50"
          />
          <button id="increment">
            <Plus size={14} />
          </button>
        </DecrementIncrementInput>

        <CartButton>
          <ShoppingCartSimple weight="fill" size={22} />
        </CartButton>
      </AddToCart>
    </Card>
  )
}
