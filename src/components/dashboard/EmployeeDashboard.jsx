import React, { useState } from 'react'
import Header from '../EmployeeComponents/Header'
import TaskListNumber from '../EmployeeComponents/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
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
      />

      <TaskListNumber darkMode={darkMode} />

      <TaskList darkMode={darkMode} />
    </div>
  )
}

export default EmployeeDashboard