import React from 'react'

const TaskList = ({ darkMode }) => {
  return (
    <div
      className={`mt-5 flex min-h-0 w-full min-w-0 flex-1 gap-4 overflow-x-auto rounded-3xl p-4 scrollbar-hide transition-colors duration-300 sm:p-5 ${
        darkMode ? 'bg-[#292722]' : 'bg-[#ded8cf]'
      }`}
    >

      {/* Task 1 */}
      <div className='flex h-full min-h-[280px] w-[clamp(280px,24vw,360px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#f8d8dc] p-5 shadow-sm sm:p-6'>

        <div className='flex items-center justify-between gap-3'>
          <h3 className='rounded-full bg-rose-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white'>
            High
          </h3>

          <h4 className='whitespace-nowrap text-xs font-medium text-rose-900'>
            14 Sept 2026
          </h4>
        </div>

        <div className='mt-8 flex min-h-0 min-w-0 flex-1 flex-col'>

          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-rose-700'>
            Assigned Task
          </p>

          <h3 className='mb-2 break-words text-sm font-medium text-rose-700'>
            Frontend
          </h3>

          <h2 className='break-words text-2xl font-semibold leading-tight tracking-tight text-rose-950'>
            Develop Login Authentication
          </h2>

          <div className='mt-4 min-h-0 flex-1 overflow-y-auto scrollbar-hide'>
            <p className='break-words text-sm leading-6 text-rose-900'>
              Develop login authentication and improve the user interface.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
              architecto dignissimos nesciunt ut sunt maxime voluptas totam
              exercitationem consequatur. Aperiam, tempora odio pariatur nisi
              qui beatae numquam quae enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit explicabo quod repellat tempora ab eligendi, cum earum ratione sed? Ex voluptatum dignissimos ratione! Omnis commodi, recusandae labore inventore molestiae expedita sunt facere quos ratione iusto dignissimos provident quam aliquid voluptatum soluta voluptatibus! Cupiditate repellat quo facere beatae soluta odio!
            </p>
          </div>

        </div>
      </div>


      {/* Task 2 */}
      <div className='flex h-full min-h-[280px] w-[clamp(280px,24vw,360px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#f6e5b9] p-5 shadow-sm sm:p-6'>

        <div className='flex items-center justify-between gap-3'>
          <h3 className='rounded-full bg-amber-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white'>
            Medium
          </h3>

          <h4 className='whitespace-nowrap text-xs font-medium text-amber-950'>
            14 Sept 2026
          </h4>
        </div>

        <div className='mt-8 flex min-h-0 min-w-0 flex-1 flex-col'>

          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800'>
            Assigned Task
          </p>

          <h3 className='mb-2 break-words text-sm font-medium text-amber-800'>
            UI Design
          </h3>

          <h2 className='break-words text-2xl font-semibold leading-tight tracking-tight text-amber-950'>
            Create Dashboard Layout
          </h2>

          <div className='mt-4 min-h-0 flex-1 overflow-y-auto scrollbar-hide'>
            <p className='break-words text-sm leading-6 text-amber-900'>
              Design a clean and responsive dashboard layout for employees.
              Make sure the layout works properly on desktop, tablet, and
              mobile devices.
            </p>
          </div>

        </div>
      </div>


      {/* Task 3 */}
      <div className='flex h-full min-h-[280px] w-[clamp(280px,24vw,360px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#d9e8d5] p-5 shadow-sm sm:p-6'>

        <div className='flex items-center justify-between gap-3'>
          <h3 className='rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white'>
            Low
          </h3>

          <h4 className='whitespace-nowrap text-xs font-medium text-emerald-950'>
            15 Sept 2026
          </h4>
        </div>

        <div className='mt-8 flex min-h-0 min-w-0 flex-1 flex-col'>

          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800'>
            Assigned Task
          </p>

          <h3 className='mb-2 break-words text-sm font-medium text-emerald-800'>
            Backend
          </h3>

          <h2 className='break-words text-2xl font-semibold leading-tight tracking-tight text-emerald-950'>
            Connect Backend API
          </h2>

          <div className='mt-4 min-h-0 flex-1 overflow-y-auto scrollbar-hide'>
            <p className='break-words text-sm leading-6 text-emerald-900'>
              Connect the frontend dashboard with the backend API. Integrate
              the required endpoints and test the response from the server.
            </p>
          </div>

        </div>
      </div>


      {/* Task 4 */}
      <div className='flex h-full min-h-[280px] w-[clamp(280px,24vw,360px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#dce5f5] p-5 shadow-sm sm:p-6'>

        <div className='flex items-center justify-between gap-3'>
          <h3 className='rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white'>
            High
          </h3>

          <h4 className='whitespace-nowrap text-xs font-medium text-indigo-950'>
            15 Sept 2026
          </h4>
        </div>

        <div className='mt-8 flex min-h-0 min-w-0 flex-1 flex-col'>

          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-800'>
            Assigned Task
          </p>

          <h3 className='mb-2 break-words text-sm font-medium text-indigo-800'>
            Security
          </h3>

          <h2 className='break-words text-2xl font-semibold leading-tight tracking-tight text-indigo-950'>
            Implement Authentication
          </h2>

          <div className='mt-4 min-h-0 flex-1 overflow-y-auto scrollbar-hide'>
            <p className='break-words text-sm leading-6 text-indigo-900'>
              Add protected routes and authentication checks to the
              application. Ensure unauthorized users cannot access protected
              pages.
            </p>
          </div>

        </div>
      </div>


      {/* Task 5 */}
      <div className='flex h-full min-h-[280px] w-[clamp(280px,24vw,360px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#eadcf5] p-5 shadow-sm sm:p-6'>

        <div className='flex items-center justify-between gap-3'>
          <h3 className='rounded-full bg-purple-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white'>
            Medium
          </h3>

          <h4 className='whitespace-nowrap text-xs font-medium text-purple-950'>
            16 Sept 2026
          </h4>
        </div>

        <div className='mt-8 flex min-h-0 min-w-0 flex-1 flex-col'>

          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-800'>
            Assigned Task
          </p>

          <h3 className='mb-2 break-words text-sm font-medium text-purple-800'>
            Testing
          </h3>

          <h2 className='break-words text-2xl font-semibold leading-tight tracking-tight text-purple-950'>
            Test Dashboard Features
          </h2>

          <div className='mt-4 min-h-0 flex-1 overflow-y-auto scrollbar-hide'>
            <p className='break-words text-sm leading-6 text-purple-900'>
              Test all dashboard features and fix the reported errors. Check
              the login, navigation, task management, and responsive layout.
            </p>
          </div>

        </div>
      </div>


      {/* Task 6 */}
      <div className='flex h-full min-h-[280px] w-[clamp(280px,24vw,360px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#f3dfc7] p-5 shadow-sm sm:p-6'>

        <div className='flex items-center justify-between gap-3'>
          <h3 className='rounded-full bg-orange-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white'>
            High
          </h3>

          <h4 className='whitespace-nowrap text-xs font-medium text-orange-950'>
            16 Sept 2026
          </h4>
        </div>

        <div className='mt-8 flex min-h-0 min-w-0 flex-1 flex-col'>

          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-800'>
            Assigned Task
          </p>

          <h3 className='mb-2 break-words text-sm font-medium text-orange-800'>
            Deployment
          </h3>

          <h2 className='break-words text-2xl font-semibold leading-tight tracking-tight text-orange-950'>
            Deploy Application
          </h2>

          <div className='mt-4 min-h-0 flex-1 overflow-y-auto scrollbar-hide'>
            <p className='break-words text-sm leading-6 text-orange-900'>
              Deploy the employee management application to a hosting platform.
              Configure the production environment and verify that the
              application works correctly.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default TaskList