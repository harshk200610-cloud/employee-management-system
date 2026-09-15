import React, { useState } from 'react'
import { useTasks } from '../../context/TaskContext'

const AdminFormTask = ({ employees }) => {
  const { assignTask } = useTasks()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    employeeId: '',
    category: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.employeeId ||
      !formData.category
    ) {
      alert('Please fill all fields')
      return
    }

    assignTask(formData)

    alert('Task assigned successfully')

    setFormData({
      title: '',
      description: '',
      date: '',
      employeeId: '',
      category: '',
    })
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-3xl bg-[#292722] p-5 sm:p-6 md:p-8">
      <div className="mb-6 shrink-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
          New Assignment
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-stone-100 sm:text-3xl">
          Create Task
        </h2>

        <p className="mt-2 text-sm text-stone-400 sm:text-base">
          Assign a new task to your employee.
        </p>
      </div>

      <div className="form-scroll min-h-0 flex-1 overflow-y-auto pr-1">
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-200">
              Task Title
            </label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              placeholder="Enter task title"
              className="w-full rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-200">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Describe the task"
              className="w-full resize-none rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-200">
              Date
            </label>

            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              className="w-full rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-200 outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-200">
              Assign To
            </label>

            <select
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-100 outline-none focus:border-amber-400"
            >
              <option value="">Select employee</option>

              {employees.map((employee) => (
                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.firstName} - {employee.email}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-200">
              Category
            </label>

            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              type="text"
              placeholder="Development, Design, Testing"
              className="w-full rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-100 outline-none placeholder:text-stone-500 focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-400 py-3.5 font-semibold text-stone-950 transition hover:bg-amber-300"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminFormTask