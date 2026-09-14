import React from 'react'

const TaskListNumber = ({ darkMode }) => {
  return (
    <div className='mt-5 w-full min-w-0 overflow-x-auto overflow-y-hidden scrollbar-hide'>

      <div className='flex w-max gap-4 pb-1'>

        {/* New Tasks */}
        <div className='flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#f8d8dc] p-5 shadow-sm sm:w-64'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-semibold uppercase tracking-widest text-rose-700'>
              Tasks
            </span>

            <span className='text-lg text-rose-700'>↗</span>
          </div>

          <div>
            <h2 className='text-4xl font-bold tracking-tight text-rose-950'>
              0
            </h2>

            <h3 className='mt-1 text-sm font-medium text-rose-800'>
              New Task
            </h3>
          </div>
        </div>

        {/* Accepted Tasks */}
        <div className='flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#f6e5b9] p-5 shadow-sm sm:w-64'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-semibold uppercase tracking-widest text-amber-800'>
              Tasks
            </span>

            <span className='text-lg text-amber-800'>↗</span>
          </div>

          <div>
            <h2 className='text-4xl font-bold tracking-tight text-amber-950'>
              0
            </h2>

            <h3 className='mt-1 text-sm font-medium text-amber-900'>
              Accepted
            </h3>
          </div>
        </div>

        {/* Completed Tasks */}
        <div className='flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#d9e8d5] p-5 shadow-sm sm:w-64'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-semibold uppercase tracking-widest text-emerald-800'>
              Tasks
            </span>

            <span className='text-lg text-emerald-800'>↗</span>
          </div>

          <div>
            <h2 className='text-4xl font-bold tracking-tight text-emerald-950'>
              0
            </h2>

            <h3 className='mt-1 text-sm font-medium text-emerald-900'>
              Completed
            </h3>
          </div>
        </div>

        {/* Failed Tasks */}
        <div className='flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#f3caca] p-5 shadow-sm sm:w-64'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-semibold uppercase tracking-widest text-red-700'>
              Tasks
            </span>

            <span className='text-lg text-red-700'>↗</span>
          </div>

          <div>
            <h2 className='text-4xl font-bold tracking-tight text-red-950'>
              0
            </h2>

            <h3 className='mt-1 text-sm font-medium text-red-900'>
              Failed
            </h3>
          </div>
        </div>

        {/* In Progress */}
        <div className='flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#dce5f5] p-5 shadow-sm sm:w-64'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-semibold uppercase tracking-widest text-indigo-800'>
              Tasks
            </span>

            <span className='text-lg text-indigo-800'>↗</span>
          </div>

          <div>
            <h2 className='text-4xl font-bold tracking-tight text-indigo-950'>
              0
            </h2>

            <h3 className='mt-1 text-sm font-medium text-indigo-900'>
              In Progress
            </h3>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className='flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#eadcf5] p-5 shadow-sm sm:w-64'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-semibold uppercase tracking-widest text-purple-800'>
              Tasks
            </span>

            <span className='text-lg text-purple-800'>↗</span>
          </div>

          <div>
            <h2 className='text-4xl font-bold tracking-tight text-purple-950'>
              0
            </h2>

            <h3 className='mt-1 text-sm font-medium text-purple-900'>
              Pending
            </h3>
          </div>
        </div>

        {/* Review Tasks */}
        <div className='flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#f3dfc7] p-5 shadow-sm sm:w-64'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-semibold uppercase tracking-widest text-orange-800'>
              Tasks
            </span>

            <span className='text-lg text-orange-800'>↗</span>
          </div>

          <div>
            <h2 className='text-4xl font-bold tracking-tight text-orange-950'>
              0
            </h2>

            <h3 className='mt-1 text-sm font-medium text-orange-900'>
              Under Review
            </h3>
          </div>
        </div>

        {/* Total Tasks */}
        <div className='flex h-32 w-60 shrink-0 flex-col justify-between rounded-3xl bg-[#d8dedb] p-5 shadow-sm sm:w-64'>
          <div className='flex items-center justify-between'>
            <span className='text-xs font-semibold uppercase tracking-widest text-slate-700'>
              Tasks
            </span>

            <span className='text-lg text-slate-700'>↗</span>
          </div>

          <div>
            <h2 className='text-4xl font-bold tracking-tight text-slate-950'>
              0
            </h2>

            <h3 className='mt-1 text-sm font-medium text-slate-800'>
              Total Tasks
            </h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TaskListNumber