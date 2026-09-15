import React from 'react'

const Header = ({ data, handleLogout }) => {
  return (
    <header className="flex items-center justify-between gap-4 px-1 py-2">
      <div>
        <p className="text-xs font-medium tracking-wide text-[#4f4a42] sm:text-sm">
          Employee Management System
        </p>

        <h1 className="mt-1 text-2xl font-bold text-[#171612] sm:text-3xl">
          Welcome {data?.firstName || 'Admin'} <span>👋</span>
        </h1>
      </div>

      <div className="flex items-center gap-3 text-sm font-medium text-[#292722]">
        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

        Admin

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-xl bg-[#292722] px-4 py-2 text-white transition hover:bg-[#454139]"
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header