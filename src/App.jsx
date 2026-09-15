import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [isSessionChecked, setIsSessionChecked] = useState(false)

  const authData = useContext(AuthContext)

  // Restore the session after page reload
  useEffect(() => {
    if (!authData) {
      return
    }

    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser)

        setUser(userData.role)
        setLoggedInUserData(userData.data)
      } catch (error) {
        console.error('Invalid login session:', error)
        localStorage.removeItem('loggedInUser')
      }
    }

    setIsSessionChecked(true)
  }, [authData])

  const handleLogin = (email, password) => {
    if (!authData) {
      return
    }

    const admin = authData.admin.find(
      (employee) =>
        employee.email === email &&
        employee.password === password
    )

    if (admin) {
      setUser('admin')
      setLoggedInUserData(admin)

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'admin',
          data: admin,
        })
      )

      return
    }

    const employee = authData.employees.find(
      (employee) =>
        employee.email === email &&
        employee.password === password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'employee',
          data: employee,
        })
      )

      return
    }

    alert('Invalid credentials')
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setLoggedInUserData(null)
  }

  if (!isSessionChecked) {
    return null
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && (
        <AdminDashboard
          data={loggedInUserData}
          handleLogout={handleLogout}
        />
      )}

      {user === 'employee' && (
        <EmployeeDashboard
          data={loggedInUserData}
          handleLogout={handleLogout}
        />
      )}
    </>
  )
}

export default App