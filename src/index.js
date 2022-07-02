import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router'
import theme from './theme.json'
import { ThemeProvider } from './contexts/ThemeContext'

/**
 * Theme images
 */
import logo from './assets/images/logo.svg'
import favoriteBg from './assets/images/favorite-bg.jpg'
 
 /**
  * Theme icons
  */
import search from './assets/icons/search.png'
import cart from './assets/icons/cart.png'
import user from './assets/icons/user.png'
import message from './assets/icons/message.svg'
 
 theme.images = {
  logo,
  favoriteBg
 }
 
 theme.icons = {
  search,
  user,
  cart,
  message
 }

const RouteApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouteApp />
)
