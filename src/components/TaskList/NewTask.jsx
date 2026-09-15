import React from 'react'

const NewTask = () => {
  return (
    <div className="flex h-full min-h-[280px] w-[clamp(280px,24vw,360px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#dce9f7] p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
          Medium
        </h3>

        <h4 className="whitespace-nowrap text-xs font-medium text-sky-950">
          14 Sept 2026
        </h4>
      </div>

      <div className="mt-8 flex min-h-0 min-w-0 flex-1 flex-col">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
          New Task
        </p>

        <h3 className="mb-2 break-words text-sm font-medium text-sky-700">
          UI Design
        </h3>

        <h2 className="break-words text-2xl font-semibold leading-tight tracking-tight text-sky-950">
          Create Dashboard Layout
        </h2>

        <div className="scrollbar-hide mt-4 min-h-0 flex-1 overflow-y-auto">
          <p className="break-words text-sm leading-6 text-sky-900">
            Design a clean and responsive dashboard layout for employees.
            Make sure the layout works properly on desktop, tablet, and
            mobile devices.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          className="flex-1 rounded-xl bg-sky-700 px-4 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-sky-800 active:scale-[0.98]"
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask