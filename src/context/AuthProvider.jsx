import React, {
  createContext,
  useEffect,
  useState,
} from 'react'

import {
  getLocalStorage,
  setLocalStorage,
} from '../utils/LocalStorage'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [userdata, setUserData] = useState(null)

  useEffect(() => {
    if (
      !localStorage.getItem('employees') ||
      !localStorage.getItem('admin')
    ) {
      setLocalStorage()
    }

    const { employees, admin } = getLocalStorage()

    setUserData({
      employees,
      admin,
    })
  }, [])

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider