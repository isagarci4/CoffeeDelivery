import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Aside = styled.aside`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    padding: 8px;
    background: ${(props) => props.theme.colors['purple-light']};
    color: ${(props) => props.theme.colors['purple-dark']};
    border-radius: 6px;

    ${mixins.fonts.textS}
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px;
    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    border-radius: 6px;
  }
`
