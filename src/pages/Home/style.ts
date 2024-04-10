import { mixins } from './../../styles/mixins'
import styled from 'styled-components'

export const HomeContainer = styled.main``

export const Presentation = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 8.75rem;
`

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  gap: 4.125rem;
`

export const Title = styled.div`
  flex-direction: column;
  display: flex;
  gap: 16px;

  h1 {
    ${mixins.fonts.titleXL}
  }

  p {
    ${mixins.fonts.textL}
  }
`

export const Advantages = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      ${mixins.fonts.textM}
    }

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`
