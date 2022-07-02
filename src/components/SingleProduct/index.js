import React from 'react'
import {
  Container,
  InfoBox
} from './styles'

export const SingleProduct = (props) => {
  const {
    product
  } = props

  return (
    <Container>
      <img src={product.image} alt='' />
      <InfoBox>
        <h2>{product.title}</h2>
        <p className='description'>{product.description}</p>
        <p className='price'>$ <span>{product.price}</span></p>
      </InfoBox>
    </Container>
  )
}
