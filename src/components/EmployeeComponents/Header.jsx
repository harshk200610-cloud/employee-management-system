import React from 'react'

const Header = ({
  darkMode,
  toggleTheme,
  data,
  handleLogout,
}) => {
  return (
    <header
      className={`flex shrink-0 items-center justify-between rounded-3xl border px-5 py-5 shadow-sm transition-colors duration-300 sm:px-7 ${
        darkMode
          ? 'border-stone-700 bg-[#292722]'
          : 'border-stone-200 bg-[#f8f6f2]'
      }`}
    >
      <div>
        <p
          className={`mb-1 text-xs font-medium uppercase tracking-[0.2em] ${
            darkMode ? 'text-stone-400' : 'text-stone-500'
          }`}
        >
          Employee Management System
        </p>

        <h1
          className={`text-2xl font-semibold tracking-tight sm:text-3xl ${
            darkMode ? 'text-stone-100' : 'text-stone-900'
          }`}
        >
          Hello, {data?.firstName || 'Employee'}
          <span className="ml-2 inline-block">👋</span>
        </h1>

        <p
          className={`mt-1 text-sm ${
            darkMode ? 'text-stone-400' : 'text-stone-500'
          }`}
        >
          Here is your task overview for today.
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark and light theme"
          className={`flex h-11 w-11 items-center justify-center rounded-xl border text-xl transition ${
            darkMode
              ? 'border-stone-600 bg-stone-800 text-yellow-300 hover:bg-stone-700'
              : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-100'
          }`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <button
          type="button"
          onClick={handleLogout}
          className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition sm:px-6 ${
            darkMode
              ? 'bg-stone-100 text-stone-900 hover:bg-stone-300'
              : 'bg-stone-900 text-white hover:bg-stone-700'
          }`}
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header