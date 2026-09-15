import React from 'react'
import { useTasks } from '../../context/TaskContext'

const AllTask = () => {
  const { employees, deleteCompletedTask } = useTasks()

  const allTasks = employees.flatMap((employee) =>
    employee.tasks.map((task) => ({
      ...task,
      employeeId: employee.id,
      employeeName: employee.firstName,
    }))
  )

  const getStatus = (task) => {
    if (task.completed) return 'Completed'
    if (task.failed) return 'Failed'
    if (task.active) return 'In Progress'
    if (task.newTask) return 'New Task'

    return 'Pending'
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-[#292722] p-4 sm:p-5">
      <div className="mb-4 shrink-0">
        <h2 className="text-xl font-semibold text-[#f5f1e8]">
          All Tasks
        </h2>

        <p className="text-sm text-[#bdb7aa]">
          View all assigned tasks
        </p>
      </div>

      <div className="task-scroll min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {allTasks.length === 0 && (
          <p className="text-sm text-stone-400">
            No tasks available.
          </p>
        )}

        {allTasks.map((task) => (
          <div
            key={`${task.employeeId}-${task.id}`}
            className="rounded-xl bg-[#383732] p-4 text-[#f5f1e8]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">
                  {task.title}
                </h3>

                <p className="mt-1 text-xs text-amber-300">
                  Assigned to: {task.employeeName}
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-amber-500 px-3 py-1 text-xs text-black">
                {getStatus(task)}
              </span>
            </div>

            <p className="mt-2 text-sm text-[#c7c1b5]">
              {task.description}
            </p>

            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-xs text-stone-400">
                {task.date}
              </p>

              {task.completed && (
                <button
                  type="button"
                  onClick={() =>
                    deleteCompletedTask(
                      task.employeeId,
                      task.id
                    )
                  }
                  className="rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
                >
                  Delete Completed Task
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask