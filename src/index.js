import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router'
import theme from './theme.json'
import { ThemeProvider } from './contexts/ThemeContext'

/**
 * Theme images
 */
import logo from './assets/images/logo.svg'
 
 /**
  * Theme icons
  */
 
 theme.images = {
  logo
 }
 
 theme.icons = {

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
