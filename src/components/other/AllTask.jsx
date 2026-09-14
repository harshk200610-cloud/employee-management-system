import React from 'react'

const AllTask = () => {
  return (
    <div className='flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-[#292722] p-4 sm:p-5'>

      <div className='mb-4 shrink-0'>
        <h2 className='text-xl font-semibold text-[#f5f1e8]'>
          All Tasks
        </h2>

        <p className='text-sm text-[#bdb7aa]'>
          View all assigned tasks
        </p>
      </div>

      <div className='task-scroll min-h-0 flex-1 space-y-4 overflow-y-auto pr-1'>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>Design Landing Page</h3>

            <span className='shrink-0 rounded-full bg-amber-500 px-3 py-1 text-xs text-black'>
              Pending
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Create a responsive landing page for the product.
          </p>
        </div>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>Build Login Page</h3>

            <span className='shrink-0 rounded-full bg-emerald-500 px-3 py-1 text-xs text-black'>
              Completed
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Develop the login page with form validation.
          </p>
        </div>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>Create Dashboard</h3>

            <span className='shrink-0 rounded-full bg-orange-400 px-3 py-1 text-xs text-black'>
              In Progress
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Create the employee management dashboard.
          </p>
        </div>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>Connect Backend</h3>

            <span className='shrink-0 rounded-full bg-amber-500 px-3 py-1 text-xs text-black'>
              Pending
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Connect the dashboard with the backend API.
          </p>
        </div>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>Testing</h3>

            <span className='shrink-0 rounded-full bg-orange-400 px-3 py-1 text-xs text-black'>
              In Progress
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Test all dashboard features and fix errors.
          </p>
        </div>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>Deploy Application</h3>

            <span className='shrink-0 rounded-full bg-amber-500 px-3 py-1 text-xs text-black'>
              Pending
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Deploy the application to a hosting platform.
          </p>
        </div>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>Database Setup</h3>

            <span className='shrink-0 rounded-full bg-amber-500 px-3 py-1 text-xs text-black'>
              Pending
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Create the required database tables and relationships.
          </p>
        </div>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>API Integration</h3>

            <span className='shrink-0 rounded-full bg-orange-400 px-3 py-1 text-xs text-black'>
              In Progress
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Integrate frontend components with backend APIs.
          </p>
        </div>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>User Authentication</h3>

            <span className='shrink-0 rounded-full bg-emerald-500 px-3 py-1 text-xs text-black'>
              Completed
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Implement login, logout, and protected routes.
          </p>
        </div>

        <div className='rounded-xl bg-[#383732] p-4 text-[#f5f1e8]'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='font-semibold'>Final Review</h3>

            <span className='shrink-0 rounded-full bg-amber-500 px-3 py-1 text-xs text-black'>
              Pending
            </span>
          </div>

          <p className='mt-2 text-sm text-[#c7c1b5]'>
            Review the complete application before submission.
          </p>
        </div>

      </div>
    </div>
  )
}

export default AllTask