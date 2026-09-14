import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (email,password)=>{
    if(email == 'admin@123' && password == '123'){
      setUser('admin')
    }else if(email == 'user@123' && password == '123'){
      setUser('employee')
    }else{
      alert("Invalid credentials")
    }
  }

  useEffect(()  => {
    // setLocalStorage()
    getLocalStorage()
  })



  return (
    <>
      {!user ?  <Login  handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
       
        {/* <EmployeeDashboard /> */}
        {/* <AdminDashboard /> */}
    
    </>
  )
}

export default App
