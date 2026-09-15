import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  getLocalStorage,
  setLocalStorage,
} from '../utils/LocalStorage'

export const TaskContext = createContext(null)

const TaskProvider = ({ children }) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const storedData = getLocalStorage()

    setEmployees(storedData.employees || [])
  }, [])

  const calculateTaskNumber = (tasks) => {
    return {
      active: tasks.filter((task) => task.active).length,
      newTask: tasks.filter((task) => task.newTask).length,
      completed: tasks.filter((task) => task.completed).length,
      failed: tasks.filter((task) => task.failed).length,
      total: tasks.length,
    }
  }

  const assignTask = ({
    employeeId,
    title,
    description,
    date,
    category,
  }) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      date,
      category,

      active: false,
      newTask: true,
      completed: false,
      failed: false,
    }

    setEmployees((previousEmployees) => {
      const updatedEmployees = previousEmployees.map((employee) => {
        if (employee.id !== Number(employeeId)) {
          return employee
        }

        const updatedTasks = [...employee.tasks, newTask]

        return {
          ...employee,
          tasks: updatedTasks,
          taskNumber: calculateTaskNumber(updatedTasks),
        }
      })

      localStorage.setItem(
        'employees',
        JSON.stringify(updatedEmployees)
      )

      return updatedEmployees
    })
  }

  const deleteCompletedTask = (employeeId, taskId) => {
    setEmployees((previousEmployees) => {
      const updatedEmployees = previousEmployees.map((employee) => {
        if (employee.id !== Number(employeeId)) {
          return employee
        }

        const updatedTasks = employee.tasks.filter(
          (task) =>
            !(
              task.id === taskId &&
              task.completed === true
            )
        )

        return {
          ...employee,
          tasks: updatedTasks,
          taskNumber: calculateTaskNumber(updatedTasks),
        }
      })

      localStorage.setItem(
        'employees',
        JSON.stringify(updatedEmployees)
      )

      return updatedEmployees
    })
  }

  return (
    <TaskContext.Provider
      value={{
        employees,
        assignTask,
        deleteCompletedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error(
      'useTasks must be used inside TaskProvider'
    )
  }

  return context
}

export default TaskProvider