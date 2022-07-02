import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { MenuListIcon } from '../Shared/SvgIcons'
import { useWindowSize } from '../../hooks/useWindowSize'
import {
  Container,
  FreeShipping,
  InnerContainer,
  LogoWrapper,
  MenuList,
  MenuItem,
  IconList,
  MobileMenuWrapper,
  MobileMenuItem,
  OverLay
} from './styles'

export const Header = () => {
  const theme = useTheme()
  const { width } = useWindowSize()

  const [isMobileMenu, setIsMobileMenu] = useState(false)

  const menuList = [
    { path: 'mens', title: 'Men’s' },
    { path: 'womens', title: 'WOMen’s' },
    { path: 'accessories', title: 'ACCESSORIES' },
    { path: 'sale', title: 'SALE!' },
  ]

  return (
    <>
      <FreeShipping>
        <p>FREE SHIPPING ON ALL ORDERS OVER $75</p>
      </FreeShipping>
      <Container>
        <InnerContainer>
          <LogoWrapper>
            {width < 769 && <MenuListIcon onClick={() => setIsMobileMenu(true)} />}
            <img src={theme.images.logo} alt='logo' />
          </LogoWrapper>
          {width > 769 && (
            <MenuList>
              {
                menuList.map((menu, i) => (
                  <MenuItem
                    key={i}
                  >
                    {menu.title}
                  </MenuItem>
                ))
              }
            </MenuList>
          )}
          <IconList>
            <span>
              <img src={theme.icons.search} alt='' />
            </span>
            <span>
              <img src={theme.icons.user} alt='' />
            </span>
            <span>
              <img src={theme.icons.cart} alt='' />
            </span>
          </IconList>
        </InnerContainer>
      </Container>
      <MobileMenuWrapper style={{ width: isMobileMenu && '75%' }}>
        <div>
          <LogoWrapper>
            <img src={theme.images.logo} alt='logo' />
          </LogoWrapper>
          {menuList.map((menu, i) => (
            <MobileMenuItem
              key={i}
            >
              <span>
                {menu.title}
              </span>
            </MobileMenuItem>
          ))}
        </div>
      </MobileMenuWrapper>
      {isMobileMenu && (
        <OverLay onClick={() => setIsMobileMenu(false)} />
      )}
    </>
  )
}
