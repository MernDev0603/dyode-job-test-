import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
`

export const FreeShipping = styled.div`
  background-color: ${props => props.theme.colors.black};
  padding: 20px;
  > p {
    font-family: 'Lato';
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`

export const InnerContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 576px) {
    padding: 15px 20px;
  }

  @media (min-width: 769px) {
    padding: 20px 30px;
  }

  @media (min-width: 993px) {
    padding: 24px 40px;
  }

  @media (min-width: 1024px) {
    padding: 34px 48px 27px 48px;
  }
  
  @media (min-width: 1500px) {
    padding: 34px 30px 27px 30px;
  }
`

export const LogoWrapper = styled.div`
  object-fit: cover;
  cursor: pointer;
  img {
    transition: all 0.2s ease-out;
    height: 46px;
  }

  @media (min-width: 576px) {
    img {
      height: 77px;
    }
  }
`
