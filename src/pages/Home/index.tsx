import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  Advantages,
  Coffees,
  Container,
  HomeContainer,
  Presentation,
  Title,
} from './style'
import coffeeImage from '../../assets/imagem-apresentacao.svg'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  const coffees = [
    {
      id: '0',
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional'],
      price: 9.9,
      image: '/images/Expresso.png',
    },
    {
      id: '1',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      tags: ['tradicional'],
      price: 9.9,
      image: '/images/Americano.png',
    },
    {
      id: '2',
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      tags: ['tradicional'],
      price: 9.9,
      image: '/images/Cremoso.png',
    },
    {
      id: '3',
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      tags: ['tradicional', 'gelado'],
      price: 9.9,
      image: '/images/Gelado.png',
    },
    {
      id: '4',
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: '/images/Leite.png',
    },
    {
      id: '5',
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: '/images/Latte.png',
    },
    {
      id: '6',
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: '/images/Capuccino.png',
    },
    {
      id: '7',
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: '/images/Macchiato.png',
    },
    {
      id: '8',
      title: 'Mocaccino',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      image: '/images/Mocaccino.png',
    },
    {
      id: '9',
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      tags: ['especial', 'com leite'],
      price: 9.9,
      image: '/images/Chocolate.png',
    },
    {
      id: '10',
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tags: ['especial', 'alcoólico', 'gelado'],
      price: 9.9,
      image: '/images/Cubano.png',
    },
    {
      id: '11',
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      tags: ['especial'],
      price: 9.9,
      image: '/images/Havaiano.png',
    },
    {
      id: '12',
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      tags: ['especial'],
      price: 9.9,
      image: '/images/Tradicional.png',
    },
    {
      id: '13',
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tags: ['especial', 'alcoólico'],
      price: 9.9,
      image: '/images/Irlandes.png',
    },
  ]
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
      <h2>Nossos cafés</h2>

      <Coffees>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </Coffees>
    </HomeContainer>
  )
}
