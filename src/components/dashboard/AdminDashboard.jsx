import React from 'react'
import Header from '../other/Header'
import AdminFormTask from '../other/AdminFormTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({
  data,
  employees,
  handleLogout,
}) => {
  return (
    <div className="h-screen overflow-hidden bg-[#d3cdc0] p-4 sm:p-5 lg:p-7">
      <div className="mx-auto flex h-full min-h-0 max-w-[1500px] flex-col gap-5">
        <Header
          data={data}
          handleLogout={handleLogout}
        />

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="form-scroll min-h-0 overflow-y-auto">
            <AdminFormTask employees={employees} />
          </div>

          <div className="min-h-0 min-w-0 overflow-hidden">
            <AllTask />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard