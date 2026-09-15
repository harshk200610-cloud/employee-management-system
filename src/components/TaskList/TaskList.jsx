import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ darkMode, data }) => {
  const tasks = data?.tasks || []

  return (
    <div
      className={`mt-5 flex min-h-0 w-full min-w-0 flex-1 gap-4 overflow-x-auto rounded-3xl p-4 scrollbar-hide transition-colors duration-300 sm:p-5 ${
        darkMode ? 'bg-[#292722]' : 'bg-[#ded8cf]'
      }`}
    >
      {tasks.map((task) => {
        if (task.active) {
          return <AcceptTask key={task.id} data={task} />
        }

        if (task.newTask) {
          return <NewTask key={task.id} data={task} />
        }

        if (task.completed) {
          return <CompleteTask key={task.id} data={task} />
        }

        if (task.failed) {
          return <FailedTask key={task.id} data={task} />
        }

        return null
      })}
    </div>
  )
}

export default TaskList