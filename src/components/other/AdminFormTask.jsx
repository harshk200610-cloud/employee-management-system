import React from 'react'

const AdminFormTask = () => {
  return (
    <div className='flex h-full min-h-0 flex-col overflow-hidden rounded-3xl bg-[#292722] p-5 sm:p-6 md:p-8'>

      {/* Fixed Create Task Header */}
      <div className='mb-6 flex shrink-0 items-start justify-between gap-3'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-widest text-stone-400'>
            New Assignment
          </p>

          <h2 className='mt-2 text-2xl font-semibold text-stone-100 sm:text-3xl'>
            Create Task
          </h2>

          <p className='mt-2 text-sm text-stone-400 sm:text-base'>
            Assign a new task to your employee.
          </p>
        </div>

        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-lg font-bold text-stone-950'>
          +
        </div>
      </div>

      {/* Only Form Fields Scroll */}
      <div className='form-scroll min-h-0 flex-1 overflow-y-auto pr-1'>
        <form className='space-y-5'>

          {/* Task Title */}
          <div>
            <label className='mb-2 block text-sm font-semibold text-stone-200'>
              Task Title
            </label>

            <input
              type='text'
              placeholder='Enter your task'
              className='w-full rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20'
            />
          </div>

          {/* Description */}
          <div>
            <label className='mb-2 block text-sm font-semibold text-stone-200'>
              Description
            </label>

            <textarea
              rows='5'
              placeholder='Describe the task and expected outcome...'
              className='w-full resize-none rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20'
            />
          </div>

          {/* Date */}
          <div>
            <label className='mb-2 block text-sm font-semibold text-stone-200'>
              Date
            </label>

            <input
              type='date'
              className='w-full rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-200 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20'
            />
          </div>

          {/* Assign To */}
          <div>
            <label className='mb-2 block text-sm font-semibold text-stone-200'>
              Assign To
            </label>

            <input
              type='text'
              placeholder='Employee name'
              className='w-full rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20'
            />
          </div>

          {/* Category */}
          <div>
            <label className='mb-2 block text-sm font-semibold text-stone-200'>
              Category
            </label>

            <input
              type='text'
              placeholder='design, development, security'
              className='w-full rounded-xl border border-stone-600 bg-[#383732] px-4 py-3.5 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20'
            />
          </div>

          {/* Button */}
          <button
            type='button'
            className='w-full rounded-xl bg-amber-400 py-3.5 font-semibold text-stone-950 transition hover:bg-amber-300'
          >
            Create Task
          </button>

        </form>
      </div>
    </div>
  )
}

export default AdminFormTask