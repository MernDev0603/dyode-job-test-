import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Button, Input } from '../Shared'
import {
  Container,
  InnerContainer,
  Header,
  Content,
  Descrption,
  FormWrapper
} from './styles'

export const SignUpAndStay = () => {
  const theme = useTheme()
  const [value, setValue] = useState('')

  return (
    <Container>
      <InnerContainer>
        <Header>
          <img src={theme.icons.message} alt='' />
          <h2>Sign Up & Stay Connected</h2>
        </Header>
        <Content>
          <Descrption>
            <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
          </Descrption>
          <FormWrapper>
            <Input
              placeholder='Enter Your Email Address'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button color='primary' naked>Subscribe</Button>
          </FormWrapper>
        </Content>
      </InnerContainer>
    </Container>
  )
}