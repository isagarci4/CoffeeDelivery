import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  Advantages,
  Container,
  HomeContainer,
  Presentation,
  Title,
} from './style'
import coffeeImage from '../../assets/imagem-apresentacao.svg'

export function Home() {
  const theme = useTheme()
  return (
    <HomeContainer>
      <Presentation>
        <Container>
          <Title>
            <h1>Econtre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <Advantages>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['base-text'] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.purple }}
              />
              <span>Café chega fresquinho até você</span>
            </div>
          </Advantages>
        </Container>
        <img src={coffeeImage} alt="" />
      </Presentation>
      <div>
        <h2>Nossos cafés</h2>
      </div>
    </HomeContainer>
  )
}
