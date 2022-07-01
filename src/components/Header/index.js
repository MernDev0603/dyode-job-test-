import React from 'react'
import { useTheme } from 'styled-components'
import {
  Container,
  FreeShipping,
  InnerContainer,
  LogoWrapper
} from './styles'

export const Header = () => {
  const theme = useTheme()

  return (
    <>
      <FreeShipping>
        <p>FREE SHIPPING ON ALL ORDERS OVER $75</p>
      </FreeShipping>
      <Container>
        <InnerContainer>
          <LogoWrapper>
            <img src={theme.images.logo} alt='logo' />
          </LogoWrapper>
        </InnerContainer>
      </Container>
    </>
  )
}
