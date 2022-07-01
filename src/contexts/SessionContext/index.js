import React, { createContext, useContext, useEffect, useState } from 'react'

/**
 * Create SessionContext
 * This context will manage the session internally and provide an easy interface
 */
export const SessionContext = createContext()

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const SessionProvider = ({ children, strategy }) => {
  const [state, setState] = useState({
    auth: null,
    token: null,
    user: null,
    loading: true
  })

  const setValuesFromLocalStorage = async () => {
    const { auth, token, user } = await getValuesFromLocalStorage()
    setState({
      ...state,
      auth,
      token,
      user,
      loading: false
    })
  }

  const getValuesFromLocalStorage = async () => {
    const auth = await strategy.getItem('token')
    const token = await strategy.getItem('token')
    const user = await strategy.getItem('user', true)
    return { auth, token, user }
  }

  const login = async (values) => {
    await strategy.setItem('token', values.passwordhash)
    await strategy.setItem('user', values?.userid, true)
    setState({
      ...state,
      auth: true,
      user: values?.userid,
      token: values.passwordhash,
      loading: false
    })
  }

  const logout = async () => {
    await strategy.removeItem('token')
    await strategy.removeItem('user')
    setState({
      ...state,
      auth: false,
      user: null,
      token: null,
      loading: false
    })
  }

  const changeUser = async (user) => {
    await strategy.setItem('user', user, true)
    setState({
      ...state,
      user,
      loading: false
    })
  }

  
  useEffect(() => {
    const checkLocalStorage = async () => {
      const { token, user } = await getValuesFromLocalStorage()
      if (token && !state.token) {
        login({
          user,
          token
        })
      }
  
      if (!token && state.token) {
        logout()
      }
    }
    const interval = setInterval(() => {
      checkLocalStorage()
    }, 1000)
    return () => clearInterval(interval)
  }, [state])

  useEffect(() => {
    setValuesFromLocalStorage()
  }, [])

  const functions = {
    login,
    logout,
    changeUser
  }

  return (
    <SessionContext.Provider value={[state, functions]}>
      {children}
    </SessionContext.Provider>
  )
}

/**
 * Hook to get and update session state
 */
export const useSession = () => {
  const sessionManager = useContext(SessionContext)
  return sessionManager || [{}, () => {}]
}
