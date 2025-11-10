import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../common/Sidebar'

const AdminLayout = () => {
  return (
    <div>
        <Sidebar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout