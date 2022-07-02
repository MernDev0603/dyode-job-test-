import React, { useState } from 'react'
import { FacebookIcon, InstagramIcon, MinusIcon, PlusIcon, TwitterIcon } from '../Shared/SvgIcons'
import { useWindowSize } from '../../hooks/useWindowSize'
import {
  Container,
  InnerContainer,
  Content,
  MenuList,
  LeftMenuList,
  SocialList,
  TitleWrapper,
  MenuListWrapper
} from './styles'

export const Footer = () => {
  const { width } = useWindowSize()
  const [isService, setIsService] = useState(true)
  const [isCompany, setIsCompany] = useState(true)

  const serviceList = [
    { path: 'accessibility', name: 'Accessibility' },
    { path: 'contact-us', name: 'Contact Us' },
    { path: 'return-policy', name: 'Return Policy' },
    { path: 'faq', name: 'FAQ' },
    { path: 'gift-certificates', name: 'Gift Certificates' },
    { path: 'wishlist', name: 'Wishlist' }
  ]

  const companyList = [
    { path: 'about-us', name: 'About Us' },
    { path: 'careers', name: 'Careers' },
    { path: 'press', name: 'Press' },
    { path: 'affiliates', name: 'Affiliates' }
  ]

  return (
    <Container>
      <InnerContainer>
        <Content>
          <LeftMenuList>
            <MenuList>
              <TitleWrapper>
                <h2>Customer Service</h2>
                <span onClick={() => setIsService(prev => !prev)}>{isService ? <MinusIcon /> : <PlusIcon />}</span>
              </TitleWrapper>
              <MenuListWrapper active={isService}>
                {serviceList.map((menu, i) => (
                  <p key={i}>{menu.name}</p>
                ))}
              </MenuListWrapper>
            </MenuList>
            <MenuList>
              <TitleWrapper>
                <h2>Company</h2>
                <span onClick={() => setIsCompany(prev => !prev)}>{isCompany ? <MinusIcon /> : <PlusIcon />}</span>
              </TitleWrapper>
              <MenuListWrapper active={isCompany}>
                {companyList.map((menu, i) => (
                  <p key={i}>{menu.name}</p>
                ))}
              </MenuListWrapper>
            </MenuList>
          </LeftMenuList>
          <MenuList>
            <h2>Follow Us</h2>
            <SocialList>
              <a href='https://facebook.com'>
                <FacebookIcon />
              </a>
              <a href='https://instagram.com'>
                <InstagramIcon />
              </a>
              {width < 769 && (
                <a href='https://twitter.com'>
                  <TwitterIcon />
                </a>
              )}
            </SocialList>
          </MenuList>
        </Content>
      </InnerContainer>
    </Container>
  )
}
