import {
  employees,
  admin,
} from './data'

export const setLocalStorage = () => {
  localStorage.setItem(
    'employees',
    JSON.stringify(employees)
  )

  localStorage.setItem(
    'admin',
    JSON.stringify(admin)
  )
}

export const getLocalStorage = () => {
  const storedEmployees =
    JSON.parse(
      localStorage.getItem('employees')
    ) || []

  const storedAdmin =
    JSON.parse(
      localStorage.getItem('admin')
    ) || []

  return {
    employees: storedEmployees,
    admin: storedAdmin,
  }
}