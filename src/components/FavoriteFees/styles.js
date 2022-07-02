import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    min-height: 220px;
  }
`

export const Content = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  color: ${props => props.theme.colors.white};

  > h1 {
    font-family: 'Pacifico';
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 9px;
  }
  button {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 26px;
    padding: 14px 20px;
    line-height: 17px;
    letter-spacing: 0.1em;
  }
  @media (min-width: 1440px) {
    > h1 {
      font-size: 60px;
    }
    p {
      font-weight: 400;
      font-size: 26px;
    }
  }
`

export const MobileContent = styled.div`
  padding: 12px 15px 38px 15px;
  background-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 46px;
    margin-bottom: 9px;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
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
    padding: 15px 15px 40px 15px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
    }
    button {
      font-size: 14px;
    }
  }
`
