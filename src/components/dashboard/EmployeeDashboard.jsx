import React, { useState } from 'react'

import Header from '../EmployeeComponents/Header'
import TaskListNumber from '../EmployeeComponents/TaskListNumber'
import TaskList from '../TaskList/TaskList'

import { useTasks } from '../../context/TaskContext'

const EmployeeDashboard = ({
  data,
  handleLogout,
}) => {
  const [darkMode, setDarkMode] = useState(false)

  const { employees } = useTasks()

  const currentEmployee =
    employees.find(
      (employee) => employee.id === data?.id
    ) || data

  const toggleTheme = () => {
    setDarkMode(
      (previousMode) => !previousMode
    )
  }

  return (
    <div
      className={`flex h-screen min-w-0 flex-col overflow-hidden p-4 transition-colors duration-300 sm:p-5 lg:p-7 ${
        darkMode
          ? 'bg-[#181817]'
          : 'bg-[#eeeae4]'
      }`}
    >
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        data={currentEmployee}
        handleLogout={handleLogout}
      />

      <TaskListNumber
        darkMode={darkMode}
        data={currentEmployee}
      />

      <TaskList
        darkMode={darkMode}
        data={currentEmployee}
      />
    </div>
  )
}

export default EmployeeDashboard