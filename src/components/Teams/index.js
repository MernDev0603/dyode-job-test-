import React from 'react'
import {
  Container,
  InnerContainer,
  PersonList,
  GroupBox,
  NameWrapper
} from './styles'

export const Teams = () => {
  const groupList = [
    { name: 'Women’s', photo: 'imgs/womens.jpg' },
    { name: 'Men’s', photo: 'imgs/mens.jpg' },
    { name: 'Accessories', photo: 'imgs/accessory.jpg' },
  ]

  return (
    <Container>
      <InnerContainer>
        <PersonList>
          {groupList.map((group, i) => (
            <GroupBox
              key={i}
            >
              <img src={group.photo} alt='' />
              <NameWrapper>
                <span>{group.name}</span>
              </NameWrapper>
            </GroupBox>
          ))}
        </PersonList>
      </InnerContainer>
    </Container>
  )
}
