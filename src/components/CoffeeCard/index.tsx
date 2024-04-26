import { useState } from 'react'
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  AddToCart,
  Card,
  CartButton,
  CoffeeDetails,
  DecrementIncrementInput,
  Price,
  Tags,
} from './styles'

type Props = {
  coffee: {
    id: string
    image: string
    tags: string[]
    title: string
    description: string
    price: number
  }
}

export function CoffeeCard({ coffee }: Props) {
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
      <img src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <CoffeeDetails>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </CoffeeDetails>

      <AddToCart>
        <Price>
          R$ <strong>{coffee.price.toFixed(2)}</strong>
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
