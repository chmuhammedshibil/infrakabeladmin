import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import AdminHeader from '../components/common/AdminHeader';

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <AdminHeader toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <main 
          className={`flex-1 transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}
          `}
        >
          <div className="p-4 md:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;