import React from 'react'

import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({
  darkMode,
  data,
}) => {
  const tasks = data?.tasks || []

  const visibleTasks = tasks.filter(
    (task) => task.completed !== true
  )

  return (
    <div
      className={`mt-5 flex min-h-0 w-full min-w-0 flex-1 gap-4 overflow-x-auto rounded-3xl p-4 scrollbar-hide transition-colors duration-300 sm:p-5 ${
        darkMode
          ? 'bg-[#292722]'
          : 'bg-[#ded8cf]'
      }`}
    >
      {visibleTasks.length === 0 && (
        <div className="flex w-full items-center justify-center">
          <p
            className={`text-sm font-medium ${
              darkMode
                ? 'text-stone-400'
                : 'text-stone-500'
            }`}
          >
            No active tasks available.
          </p>
        </div>
      )}

      {visibleTasks.map((task) => {
        if (task.newTask === true) {
          return (
            <NewTask
              key={task.id}
              data={task}
              employeeId={data.id}
            />
          )
        }

        if (task.active === true) {
          return (
            <AcceptTask
              key={task.id}
              data={task}
              employeeId={data.id}
            />
          )
        }

        if (task.failed === true) {
          return (
            <FailedTask
              key={task.id}
              data={task}
            />
          )
        }

        return null
      })}
    </div>
  )
}

export default TaskList