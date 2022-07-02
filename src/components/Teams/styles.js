import styled from 'styled-components'

export const Container = styled.div``

export const InnerContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;
  padding: 15px;

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
    padding: 30px 48px;
  }
  
  @media (min-width: 1500px) {
    padding: 50px 30px;
  }
`

export const PersonList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin-left: -10px;

  > div {
    width: calc(50% - 20px);
    margin: 10px 0px;
    margin: 10px;
  }

  > div:last-child {
    width: calc(100% - 20px);
    img {
      max-height: 500px;
    }
  }

  @media (min-width: 769px) {
    > div {
      width: calc(33.33% - 20px);
    }
    > div:last-child {
      width: calc(33.33% - 20px);
      img {
        max-height: initial;
      }
    }
  }
`

export const GroupBox = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`

export const NameWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${props => props.theme.colors.primary};
  span {
    font-family: 'Pacifico';
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  }

  @media (min-width: 576px) {
    padding: 12px;
    span {
      font-size: 30px;
    }
  }

  @media (min-width: 769px) {
    padding: 18px;
    span {
      font-size: 35px;
    }
  }

  @media (min-width: 993px) {
    span {
      line-height: 70px;
      font-size: 40px;
    }
  }
`
