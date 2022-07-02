import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    object-fit: cover;
    min-height: 220px;
  }
`

export const Content = styled.div`
  position: absolute;
  left: 50px;
  color: ${props => props.theme.colors.white};
  ${({ isPrimary }) => isPrimary && css`
    color: ${props => props.theme.colors.primary};
  `}

  > h1 {
    font-family: 'Pacifico';
    font-weight: 400;
    font-size: 26px;
    margin-bottom: 9px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
  }
  button {
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 26px;
    padding: 12px 18px;
    line-height: 17px;
    letter-spacing: 0.1em;
  }

  @media (min-width: 576px) {
    > h1 {
      font-size: 32px;
    }
    p {
      font-weight: 400;
      font-size: 18px;
    }
    button {
      font-size: 14px;
      padding: 14px 20px;
    }
  }

  @media (min-width: 769px) {
    left: 70px;
    > h1 {
      font-size: 38px;
    }
    p {
      font-weight: 400;
      font-size: 20px;
    }
  }

  @media (min-width: 993px) {
    left: 90px;
    > h1 {
      font-size: 48px;
    }
    p {
      font-weight: 400;
      font-size: 24px;
    }
  }

  @media (min-width: 1440px) {
    left: 133px;
    > h1 {
      font-size: 60px;
    }
    p {
      font-size: 26px;
    }
  }
`
