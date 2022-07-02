import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
`

export const FreeShipping = styled.div`
  background-color: ${props => props.theme.colors.black};
  padding: 15px;
  > p {
    font-family: 'Lato';
    font-weight: 500;
    font-size: 10px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (min-width: 576px) {
    padding: 15px;
    p {
      font-size: 12px;
    }
  }

  @media (min-width: 993px) {
    padding: 20px;
    p {
      font-size: 14px;
    }
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
  display: flex;
  align-items: center;

  svg {
    margin-right: 20px;
  }

  img {
    transition: all 0.2s ease-out;
    height: 46px;
  }

  @media (min-width: 576px) {
    img {
      height: 60px;
    }
  }
  @media (min-width: 1024px) {
    img {
      height: 70px;
    }
  }

  @media (min-width: 1440px) {
    img {
      height: 77px;
    }
  }
`

export const MenuItem = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 0px 15px;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s linear;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 1px;
    background-color: ${props => props.theme.colors.white};
    left: 0px;
    top: 100%;
    transition: all 0.2s linear;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }

  @media (min-width: 993px) {
    font-size: 18px;
    margin: 0px 20px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    margin: 0px 20px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
    margin: 0px 30px;
  }
`

export const MenuList = styled.div`
  display: flex;
  align-items: center;
`

export const IconList = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 10px;
    img {
      height: 20px;
      transition: all 0.2s ease-out;
    }
    &:hover {
      img {
        color: ${props => props.theme.colors.primary};
        transform: scale(1.05);
      }
    }
  }

  @media (min-width: 400px) {
    span {
      margin: 15px;
    }
  }
`

export const MobileMenuWrapper = styled.div`
  & > div {
    padding: 1.8em 1.8em 1.8em 1.8em;
    font-size: 1.15em;
  }
  position: fixed;
  right: inherit;
  z-index: 1100;
  width: 0%;
  height: 100%;
  transition: all 0.5s ease 0s;
  top: 0px;
  left: 0px;
  overflow: auto;
  background: ${props => props.theme.colors.black};
`

export const MobileMenuItem = styled.div`
  padding: 24px 24px 24px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  & > span {
    font-weight: 500 !important;
    font-size: 24px !important;
    margin-top: 24px !important;
    margin-bottom: 24px !important;
    transition: 0.2s;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.primary}
    }
  }
`

export const OverLay = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  transition: opacity 0.3s ease 0s;
  top: 0px;
  left: 0px;
`
