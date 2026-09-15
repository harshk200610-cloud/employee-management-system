import { employees, admin } from './data'

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees =
    JSON.parse(localStorage.getItem('employees')) || []

  const admin =
    JSON.parse(localStorage.getItem('admin')) || []

  return {
    employees,
    admin,
  }
}