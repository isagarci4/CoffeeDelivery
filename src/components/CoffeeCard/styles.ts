import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 1rem;

  width: 256px;
  background: ${(props) => props.theme.colors['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  img {
    margin-top: -1rem;
  }

  > span {
    ${mixins.fonts.textXS}
    padding: 4px 8px;
    border-radius: 20px;
    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const CoffeeDetails = styled.div`
  max-width: 216px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    ${mixins.fonts.titleS}
  }

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const AddToCart = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.25rem;

  display: flex;
  justify-content: space-around;
  gap: 1rem;
`

export const Price = styled.span`
  display: flex;
  align-items: center;
  ${mixins.fonts.textS}

  strong {
    ${mixins.fonts.titleM}
  }
`

export const DecrementIncrementInput = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 8px;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
  }

  button:first-child {
    padding: 8px 4px 8px 8px;
  }

  button:last-child {
    padding: 8px 8px 8px 4px;
  }

  input {
    background: transparent;
    border: none;
    width: 1.25rem;
    text-align: center;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
`
