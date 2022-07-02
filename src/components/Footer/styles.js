import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.black};
`

export const InnerContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;
  padding: 30px 15px;

  @media (min-width: 576px) {
    padding: 40px 20px;
  }

  @media (min-width: 769px) {
    padding: 45px 30px;
  }

  @media (min-width: 993px) {
    padding: 50px 40px;
  }

  @media (min-width: 1024px) {
    padding: 58px 48px;
  }
  
  @media (min-width: 1500px) {
    padding: 62px 30px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

export const MenuList = styled.div`
  margin-top: 20px;
  h2 {
    font-family: 'Pacifico';
    font-weight: 400;
    font-size: 22px;
    line-height: 39px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  @media (min-width: 769px) {
    margin-top: 0px;
    margin-right: 92px;
  }
`

export const LeftMenuList = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

export const SocialList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    transition: all 0.2s ease-in-out;
    width: 26px;
    height: 26px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-top: 10px;
    &:hover {
      svg {
        transform: scale(1.05);
      }
    }
  }
  @media (min-width: 769px) {
    justify-content: space-between;
    a {
      margin-right: 0px;
    }
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    transition: 0.2s ease-out;
    cursor: pointer;
    height: 16px;
    width: 16px;
    &:hover {
      transform: scale(1.05);
    }
  }
  @media (min-width: 769px ){
    span {
      display: none;
    }
  }
`

export const MenuListWrapper = styled.div`
  max-height: 0px;
  transition: all 0.3s linear;
  overflow: hidden;

  ${({ active }) => active && css`
    max-height: 1000px;
  `}
`