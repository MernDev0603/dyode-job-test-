import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  margin-top: -3px;
`
export const InnerContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;
  padding: 25px 15px 35px 15px;

  @media (min-width: 576px) {
    padding: 40px 20px 60px 20px;
  }

  @media (min-width: 769px) {
    padding: 50px 30px 70px 30px;
  }

  @media (min-width: 993px) {
    padding: 60px 40px 80px 40px;
  }

  @media (min-width: 1024px) {
    padding: 60px 48px 80px 48px;
  }
  
  @media (min-width: 1500px) {
    padding: 75px 30px 100px 30px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;

  img {
    width: 46px;
    margin-right: 6px;
  }
  h2 {
    font-family: 'Pacifico';
    font-weight: 400;
    font-size: 20px;
    line-height: 70px;
  }

  @media (min-width: 576px) {
    h2 {
      font-size: 28px;
    }
    img {
      width: 52px;
    }
  }
  @media (min-width: 769px) {
    h2 {
      font-size: 32px;
    }
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 40px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
  }
  @media (min-width: 769px) {
    flex-direction: row;
  }
`

export const Descrption = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    margin: 0px auto;
    text-align: center;
  }
  margin-right: 45px;
  @media (min-width: 576px) {
    p {
      font-size: 16px;
      max-width: 322px;
    }
  }
  @media (min-width: 769px) {
    p {
      font-size: 18px;
      text-align: left;
      max-width: initial;
    }
  }
  @media (min-width: 1024px) {
    p {
      font-size: 22px;
    }
  }
`

export const FormWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-top: 56px;
  justify-content: center;

  input {
    flex: 1;
    margin-right: 13px;
    display: none;
  }
  button {
    padding: 13px 26px;
  }
  @media (min-width: 769px) {
    input {
      display: block;
    }
    margin-top: 0px;
  }
`