import React, { useState } from 'react'
import Header from '../EmployeeComponents/Header'
import TaskListNumber from '../EmployeeComponents/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, handleLogout }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode)
  }

  return (
    <div
      className={`flex h-screen min-w-0 flex-col overflow-hidden p-4 transition-colors duration-300 sm:p-5 lg:p-7 ${
        darkMode ? 'bg-[#181817]' : 'bg-[#eeeae4]'
      }`}
    >
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        data={data}
        handleLogout={handleLogout}
      />

      <TaskListNumber
        darkMode={darkMode}
        data={data}
      />

      <TaskList
        darkMode={darkMode}
        data={data}
      />
    </div>
  )
}

export default EmployeeDashboard