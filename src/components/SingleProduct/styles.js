import styled from 'styled-components'

export const Container = styled.div`
  > img {
    width: 100%;
    object-fit: cover;
  }
`

export const InfoBox = styled.div`
  color: ${props => props.theme.colors.black};
  h2 {
    margin-top: 22px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
  }
  p.description {
    margin-top: 7px;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
  p.price {
    margin-top: 3px;
    font-family: 'Pacifico';
    font-weight: 400;
    font-size: 26px;
    line-height: 46px;
    text-align: center;
    color: ${props => props.theme.colors.primary};
    span {
      font-size: 18px;
    }
  }
`