import { useState } from 'react'
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  AddToCart,
  Card,
  CartButton,
  CoffeeDetails,
  DecrementIncrementInput,
  Price,
} from './styles'
import cafe from '../../assets/Expresso.png'

export function CoffeeCard() {
  const [quantity, setQuantity] = useState(1)

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrement = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1)
    }
  }
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
          <button onClick={handleDecrement}>
            <Minus size={14} />
          </button>
          <input
            type="number"
            name="quantity"
            min="1"
            max="50"
            value={quantity}
          />
          <button onClick={handleIncrement}>
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
