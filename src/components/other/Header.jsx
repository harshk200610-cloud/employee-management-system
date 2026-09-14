import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between gap-4 px-1 py-2'>
      <div>
        <p className='text-xs font-medium tracking-wide text-[#4f4a42] sm:text-sm'>
          Employee Management System
        </p>

        <h1 className='mt-1 text-2xl font-bold text-[#171612] sm:text-3xl'>
          Welcome Harsh <span>👋</span>
        </h1>
      </div>

      <div className='flex items-center gap-2 text-sm font-medium text-[#292722]'>
        <span className='h-2 w-2 rounded-full bg-emerald-500'></span>
        Admin
      </div>
    </header>
  )
}

export default Header