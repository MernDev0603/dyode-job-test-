import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Button } from '../Shared'
import {
  Container,
  Content
} from './styles'

export const HeroSingleView = (props) => {
  const { data } = props
  const { width } = useWindowSize()

  return (
    <Container>
      <img src={data.image} alt='' />
      {width > 769 && (
        <Content isPrimary={data.color === 'primary'}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <Button color='black'>Shop now</Button>
        </Content>
      )}
    </Container>
  )
}
