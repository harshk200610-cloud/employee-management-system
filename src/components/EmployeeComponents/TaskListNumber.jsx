import React from 'react'

const TaskListNumber = ({ data }) => {
  const tasks = data?.tasks || []

  const taskNumber = {
    newTask: tasks.filter((task) => task.newTask).length,
    active: tasks.filter((task) => task.active).length,
    completed: tasks.filter((task) => task.completed).length,
    failed: tasks.filter((task) => task.failed).length,
    total: tasks.length,
  }

  return (
    <div className="mt-5 w-full min-w-0 overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex w-max gap-4 pb-1">
        <div className="flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#f8d8dc] p-5 shadow-sm sm:w-64">
          <span className="text-xs font-semibold uppercase tracking-widest text-rose-700">
            Tasks
          </span>

          <div>
            <h2 className="text-4xl font-bold text-rose-950">
              {taskNumber.newTask}
            </h2>

            <h3 className="mt-1 text-sm font-medium text-rose-800">
              New Tasks
            </h3>
          </div>
        </div>

        <div className="flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#f6e5b9] p-5 shadow-sm sm:w-64">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            Tasks
          </span>

          <div>
            <h2 className="text-4xl font-bold text-amber-950">
              {taskNumber.active}
            </h2>

            <h3 className="mt-1 text-sm font-medium text-amber-900">
              Accepted
            </h3>
          </div>
        </div>

        <div className="flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#d9e8d5] p-5 shadow-sm sm:w-64">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
            Tasks
          </span>

          <div>
            <h2 className="text-4xl font-bold text-emerald-950">
              {taskNumber.completed}
            </h2>

            <h3 className="mt-1 text-sm font-medium text-emerald-900">
              Completed
            </h3>
          </div>
        </div>

        <div className="flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#f3caca] p-5 shadow-sm sm:w-64">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-700">
            Tasks
          </span>

          <div>
            <h2 className="text-4xl font-bold text-red-950">
              {taskNumber.failed}
            </h2>

            <h3 className="mt-1 text-sm font-medium text-red-900">
              Failed
            </h3>
          </div>
        </div>

        <div className="flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#dce5f5] p-5 shadow-sm sm:w-64">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-800">
            Tasks
          </span>

          <div>
            <h2 className="text-4xl font-bold text-indigo-950">
              {taskNumber.active}
            </h2>

            <h3 className="mt-1 text-sm font-medium text-indigo-900">
              In Progress
            </h3>
          </div>
        </div>

        <div className="flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#eadcf5] p-5 shadow-sm sm:w-64">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-800">
            Tasks
          </span>

          <div>
            <h2 className="text-4xl font-bold text-purple-950">
              {taskNumber.total}
            </h2>

            <h3 className="mt-1 text-sm font-medium text-purple-900">
              Total Tasks
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumber