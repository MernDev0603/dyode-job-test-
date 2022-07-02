import styled from 'styled-components'

export const Container = styled.div`
  .swiper-pagination {
    bottom: 10px;
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      opacity: 1;
      &.swiper-pagination-bullet-active {
        background: ${props => props.theme.colors.white};
      }
    }
  }

  @media (min-width: 576px) {
    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
      }
    }
  }

  @media (min-width: 769px) {
    bottom: 20px;
    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
      }
    }
    margin-bottom: 0px;
  }

  @media (min-width: 1024px) {
    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
      }
    }
  }
`

export const Content = styled.div`
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