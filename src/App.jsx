import React, {
  useContext,
  useEffect,
  useState,
} from 'react'

import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'

import { AuthContext } from './context/AuthProvider'
import { useTasks } from './context/TaskContext'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [isSessionChecked, setIsSessionChecked] = useState(false)

  const authData = useContext(AuthContext)
  const { employees } = useTasks()

  useEffect(() => {
    if (!authData || employees.length === 0) {
      return
    }

    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      try {
        const sessionData = JSON.parse(loggedInUser)

        setUser(sessionData.role)

        if (sessionData.role === 'employee') {
          const updatedEmployee = employees.find(
            (employee) => employee.id === sessionData.data.id
          )

          setLoggedInUserData(updatedEmployee)
        } else {
          setLoggedInUserData(sessionData.data)
        }
      } catch (error) {
        localStorage.removeItem('loggedInUser')
      }
    }

    setIsSessionChecked(true)
  }, [authData, employees])

  useEffect(() => {
    if (user !== 'employee' || !loggedInUserData) {
      return
    }

    const updatedEmployee = employees.find(
      (employee) => employee.id === loggedInUserData.id
    )

    if (updatedEmployee) {
      setLoggedInUserData(updatedEmployee)
    }
  }, [employees, user])

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

    const employee = employees.find(
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
          employees={employees}
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