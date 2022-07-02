import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useTheme } from 'styled-components'
import { Button } from '../Shared'
import {
  Container,
  Content,
  MobileContent
} from './styles'

export const FavoriteFees = () => {
  const theme = useTheme()
  const { width } = useWindowSize()

  return (
    <Container>
      <img src={theme.images.favoriteBg} alt='' />
      {width > 769 ? (
        <Content>
          <h1>Our Favorite Tees</h1>
          <p>Everyday tees you need.</p>
          <Button color='primary'>SHOP NOW</Button>
        </Content>
      ) : (
        <MobileContent>
          <h1>Our Favorite Tees</h1>
          <p>Everyday tees you need.</p>
          <Button color='primary'>SHOP NOW</Button>
        </MobileContent>
      )}
    </Container>
  )
}