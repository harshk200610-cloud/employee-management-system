import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  getLocalStorage,
} from '../utils/LocalStorage'

export const TaskContext = createContext(null)

const TaskProvider = ({ children }) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const storedData = getLocalStorage()

    setEmployees(storedData.employees || [])
  }, [])

  const calculateTaskNumber = (tasks = []) => {
    return {
      newTask: tasks.filter(
        (task) => task.newTask === true
      ).length,

      active: tasks.filter(
        (task) => task.active === true
      ).length,

      completed: tasks.filter(
        (task) => task.completed === true
      ).length,

      failed: tasks.filter(
        (task) => task.failed === true
      ).length,

      total: tasks.length,
    }
  }

  const saveEmployees = (updatedEmployees) => {
    localStorage.setItem(
      'employees',
      JSON.stringify(updatedEmployees)
    )

    setEmployees(updatedEmployees)
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

      newTask: true,
      active: false,
      completed: false,
      failed: false,
    }

    const updatedEmployees = employees.map((employee) => {
      if (employee.id !== Number(employeeId)) {
        return employee
      }

      const updatedTasks = [
        ...(employee.tasks || []),
        newTask,
      ]

      return {
        ...employee,
        tasks: updatedTasks,
        taskNumber: calculateTaskNumber(updatedTasks),
      }
    })

    saveEmployees(updatedEmployees)
  }

  const acceptTask = (employeeId, taskId) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id !== Number(employeeId)) {
        return employee
      }

      const updatedTasks = employee.tasks.map((task) => {
        if (task.id !== taskId) {
          return task
        }

        return {
          ...task,

          newTask: false,
          active: true,
          completed: false,
          failed: false,
        }
      })

      return {
        ...employee,
        tasks: updatedTasks,
        taskNumber: calculateTaskNumber(updatedTasks),
      }
    })

    saveEmployees(updatedEmployees)

    alert('Task accepted successfully')
  }

  const completeTask = (employeeId, taskId) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id !== Number(employeeId)) {
        return employee
      }

      const updatedTasks = employee.tasks.map((task) => {
        if (task.id !== taskId) {
          return task
        }

        return {
          ...task,

          newTask: false,
          active: false,
          completed: true,
          failed: false,
        }
      })

      return {
        ...employee,
        tasks: updatedTasks,
        taskNumber: calculateTaskNumber(updatedTasks),
      }
    })

    saveEmployees(updatedEmployees)

    alert('Task completed successfully')
  }

  const failTask = (employeeId, taskId) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id !== Number(employeeId)) {
        return employee
      }

      const updatedTasks = employee.tasks.map((task) => {
        if (task.id !== taskId) {
          return task
        }

        return {
          ...task,

          newTask: false,
          active: false,
          completed: false,
          failed: true,
        }
      })

      return {
        ...employee,
        tasks: updatedTasks,
        taskNumber: calculateTaskNumber(updatedTasks),
      }
    })

    saveEmployees(updatedEmployees)

    alert('Task marked as failed')
  }

  const deleteCompletedTask = (employeeId, taskId) => {
    const updatedEmployees = employees.map((employee) => {
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

    saveEmployees(updatedEmployees)
  }

  return (
    <TaskContext.Provider
      value={{
        employees,
        assignTask,
        acceptTask,
        completeTask,
        failTask,
        deleteCompletedTask,
        calculateTaskNumber,
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