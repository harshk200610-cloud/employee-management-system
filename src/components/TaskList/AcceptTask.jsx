import React from 'react'

import { useTasks } from '../../context/TaskContext'

const AcceptTask = ({
  data,
  employeeId,
}) => {
  const {
    completeTask,
    failTask,
  } = useTasks()

  return (
    <div className="flex h-full min-h-[280px] w-[clamp(280px,24vw,360px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#d9f0df] p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="rounded-full bg-green-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
          {data.category}
        </h3>

        <h4 className="whitespace-nowrap text-xs font-medium text-emerald-950">
          {data.date}
        </h4>
      </div>

      <div className="mt-8 flex min-h-0 min-w-0 flex-1 flex-col">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Accepted Task
        </p>

        <h2 className="break-words text-2xl font-semibold leading-tight tracking-tight text-emerald-950">
          {data.title}
        </h2>

        <div className="scrollbar-hide mt-4 min-h-0 flex-1 overflow-y-auto">
          <p className="break-words text-sm leading-6 text-emerald-900">
            {data.description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() =>
            completeTask(employeeId, data.id)
          }
          className="flex-1 rounded-xl bg-emerald-700 px-4 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-emerald-800 active:scale-[0.98]"
        >
          Mark as Completed
        </button>

        <button
          type="button"
          onClick={() =>
            failTask(employeeId, data.id)
          }
          className="flex-1 rounded-xl border border-red-600 bg-red-600 px-4 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-red-700 active:scale-[0.98]"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask