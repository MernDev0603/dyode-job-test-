import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useSession } from './contexts/SessionContext'

// pages
import { Home } from './pages/Home'
import { PageNotFound } from './pages/PageNotFound'

export const App = () => {
  const [{ loading }] = useSession()

  return (
    <>
      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}
