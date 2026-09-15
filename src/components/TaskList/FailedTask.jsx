import React from 'react'

const FailedTask = () => {
  return (
    <div className="flex h-full min-h-[280px] w-[clamp(280px,24vw,360px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#f4d4d4] p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
          High
        </h3>

        <h4 className="whitespace-nowrap text-xs font-medium text-red-950">
          15 Sept 2026
        </h4>
      </div>

      <div className="mt-8 flex min-h-0 min-w-0 flex-1 flex-col">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
          Failed Task
        </p>

        <h3 className="mb-2 break-words text-sm font-medium text-red-700">
          Security
        </h3>

        <h2 className="break-words text-2xl font-semibold leading-tight tracking-tight text-red-950">
          Implement Authentication
        </h2>

        <div className="scrollbar-hide mt-4 min-h-0 flex-1 overflow-y-auto">
          <p className="break-words text-sm leading-6 text-red-900">
            Add protected routes and authentication checks to the
            application. Ensure unauthorized users cannot access protected
            pages.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FailedTask