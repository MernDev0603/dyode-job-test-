import styled from 'styled-components'

export const Container = styled.div``

export const InnerContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;
  padding: 0px 15px;
  > h1 {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 105px;
    text-align: center;
    margin-bottom: 40px;
    color: ${props => props.theme.colors.black};
  }

  @media (min-width: 576px) {
    padding: 15px 20px;
    > h1 {
      font-size: 35px;
    }
  }

  @media (min-width: 769px) {
    padding: 0px 30px;
    > h1 {
      font-size: 38px;
    }
  }

  @media (min-width: 993px) {
    padding: 0px 40px;
    > h1 {
      font-size: 42px;
    }
  }

  @media (min-width: 1024px) {
    padding: 0px 48px;
    > h1 {
      font-size: 48px;
    }
  }
  
  @media (min-width: 1500px) {
    padding: 0px 30px;
    > h1 {
      font-size: 60px;
    }
  }
`

export const Content = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    padding: 20px;
  }
`

export const ArrowButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 36px;
  margin-left: 10px;
  &.swiper-button-prev {
    margin-right: 10px;
    margin-left: 0px;
  }
  &::after {
    display: none;
  }
  svg {
    width: 26px;
    height: 26px;
  }
  &:hover {
    svg {
      path {
        fill: ${props => props.theme.colors.primary};
        transition: all 0.3s ease-out;
      }
      circle, rect {
        stroke: ${props => props.theme.colors.primary};
        transition: all 0.3s ease-out;
      }
    }
  }

  @media (min-width: 768px) {
    width: 46px;
    svg {
      width: 36px;
      height: 36px;
    }
    margin-left: 10px;
    &.swiper-button-prev {
      margin-right: 10px;
      margin-left: 0px;
    }
  }
`
